import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDTO } from "./dto";
import * as md5 from 'md5';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ){}

  async signIn(dto: AuthDTO) {
    //Find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    });

    if(!user) {
      throw new ForbiddenException('Credentials incorrect!');
    }
    //Compare password
    const pwMatch: string = md5(user.password);
    if(pwMatch === dto.password) {
      throw new ForbiddenException('Credentials incorrect!');
    }
    
    return this.signToken(user.id, user.userName, user.email);
  }

  async signUp(dto: AuthDTO) {
    //generate the password hash
    const password: string = md5(dto.password);
    //save the new user to db
    try {
      const userName: string = dto.userName ?? dto.email.split('@')[0];
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: password,
          userName: userName
        },
        // select: {
        //   id: true,
        //   email: true,
        //   userName: true,
        //   createdAt: true,
        // }
      });
  
      return this.signToken(user.id, user.userName, user.email);
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError) {
        if(error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken')
        }
      }
      throw error;
    }
  }

  async signToken(
    userId: number,
    userName: string,
    email: string,    
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      userName,
      email
    }

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret
    });

    return {
      access_token: token
    }
  }
}