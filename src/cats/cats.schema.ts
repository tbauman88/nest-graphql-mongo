import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export type CatDocument = HydratedDocument<Cat>;

export const CatSchema = SchemaFactory.createForClass(Cat);
