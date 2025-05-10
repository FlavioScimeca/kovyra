import { UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../../decorators/current-user.decorator';
import { User } from '../../../entities/user.entity';
import { JwtAuthGuard } from '../../../guards/jwt-auth.guard';
import { UsersService } from '../users.service';
import { UpdateUserInput } from './user.inputs';
import { UserType } from './user.types';

@Resolver(() => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserType], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<UserType[]> {
    return this.usersService.findAll();
  }

  @Query(() => UserType, { name: 'user' })
  @UseGuards(JwtAuthGuard)
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<UserType> {
    return this.usersService.findOne(id);
  }

  @Query(() => UserType, { name: 'me' })
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@CurrentUser() user: User): Promise<UserType> {
    return this.usersService.findOne(user.id);
  }

  @Mutation(() => UserType, { name: 'updateMe' })
  @UseGuards(JwtAuthGuard)
  async updateCurrentUser(
    @CurrentUser() user: User,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<UserType> {
    return this.usersService.update(user.id, updateUserInput);
  }
}
