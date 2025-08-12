import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import type { User } from '../entities/user.entity';

export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext): User => {
  if (ctx.getType() === 'http') {
    // Handle REST API requests
    return ctx.switchToHttp().getRequest().user;
  } else {
    // Handle GraphQL requests
    const gqlCtx = GqlExecutionContext.create(ctx);
    return gqlCtx.getContext().req.user;
  }
});
