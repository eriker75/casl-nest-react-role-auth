import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema({
  collection: 'categories',
})
export class CategoryModel extends Document {
  @Prop({ required: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryModel);
export type CategoryDocument = HydratedDocument<CategoryModel>;
