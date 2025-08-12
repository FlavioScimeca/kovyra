import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with specific allowed origins
  app.enableCors({
    origin: ['http://localhost:4002', 'http://localhost:3000'], // Allow Voyager and frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Global validation pipe for DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties not in DTO
      transform: true, // Transform payload to DTO instance
      forbidNonWhitelisted: true, // Throw error if non-whitelisted properties are present
    })
  );

  // Initialize Passport
  app.use(passport.initialize());

  await app.listen(process.env.PORT ?? 4001);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`GraphQL Playground: ${await app.getUrl()}/graphql`);
}
bootstrap();
