import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDTO } from './dto';

@Injectable()
export class CategoryService {
  constructor(
    private prisma: PrismaService
  ) {}

  async getAllCategories() {
    const data = this.prisma.category.findMany();

    return data;
  }

  async createPost(dto: CategoryDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    })

    const newCategory = await this.prisma.category.create({
      data: {
        title: dto.title,
        description: dto.description,
        thumbnail: dto.thumbnail || '',
        userId: user.id,
      }
    });

    const updateUser = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        categories: {
          connect: { id: newCategory.id },
        }
      }
    })

    return {
      result: true,
      message: 'Created new post!'
    }
  }
}
