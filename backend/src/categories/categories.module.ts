import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
