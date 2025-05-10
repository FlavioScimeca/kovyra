import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getDatabaseConfig } from './config/database.config';
import { HealthController } from './health/health.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(
        process.cwd(),
        'environment',
        '.env.development',
      ),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getDatabaseConfig,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'server/schema.gql'),
      sortSchema: true,
      playground: true,
      introspection: true,
      context: ({ req }) => {
        // Make sure req.user is accessible in GraphQL context
        if (!req.passport) {
          req.passport = {};
        }
        if (!req.logIn) {
          req.logIn = function () {
            return new Promise((resolve) => resolve(true));
          };
        }

        return { req };
      },
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
