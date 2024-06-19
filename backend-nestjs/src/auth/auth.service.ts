import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDTO } from "./dto";
import * as md5 from 'md5';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService){}

  signIn() {
    return 'Im sign in';
  }

  async signUp(dto: AuthDTO) {
    //generate the password hash
    const password = md5(dto.password);
    //save the new user to db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: password,
        userName: dto.userName
      },
      // select: {
      //   id: true,
      //   email: true,
      //   userName: true,
      //   createdAt: true,
      // }
    });

    delete user.password;

    //return the saved user
    return user;
  }
}