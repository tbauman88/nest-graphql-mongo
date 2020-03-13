import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class CatType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}
