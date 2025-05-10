import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from '../../users/graphql/user.types';

@ObjectType()
export class AuthResponseType {
  @Field(() => UserType)
  user: UserType;

  @Field()
  token: string;
}
