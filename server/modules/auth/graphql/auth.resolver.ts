import { Args, Mutation, Resolver } from '@nestjs/graphql';
import type { AuthService } from '../auth.service';
import type { LoginInput, RegisterInput } from './auth.inputs';
import { AuthResponseType } from './auth.types';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponseType, { name: 'register' })
  async register(@Args('registerInput') registerInput: RegisterInput): Promise<AuthResponseType> {
    return this.authService.register(registerInput);
  }

  @Mutation(() => AuthResponseType, { name: 'login' })
  async login(@Args('loginInput') loginInput: LoginInput): Promise<AuthResponseType> {
    return this.authService.login(loginInput);
  }
}
