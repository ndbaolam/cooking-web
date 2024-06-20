import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto';

@Controller('api/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAllCategories(){
    return this.categoryService.getAllCategories();
  }

  @Post('create-post')
  createPost(@Body() dto: CategoryDTO) {
    return this.categoryService.createPost(dto);
  }
}
