import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bcrypt from 'bcrypt';
import { AppModule } from '../../app.module';
import { UsersService } from '../../modules/users/users.service';

async function bootstrap() {
  const logger = new Logger('SeedUsers');
  logger.log('Starting to seed test users...');

  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const usersService = app.get(UsersService);

    // Check if test user already exists
    const testUserEmail = 'test@example.com';
    const existingUser = await usersService.findByEmail(testUserEmail);

    if (!existingUser) {
      logger.log('Creating test user...');

      // Create test user with hashed password
      const hashedPassword = await bcrypt.hash('password123', 10);
      await usersService.create({
        email: testUserEmail,
        firstName: 'Test',
        lastName: 'User',
        password: hashedPassword,
      });

      logger.log('Test user created successfully!');
    } else {
      logger.log('Test user already exists.');
    }

    // Create more test users as needed
    logger.log('Seed completed successfully!');
  } catch (error) {
    logger.error('Error during seeding:', error);
  } finally {
    await app.close();
  }
}

bootstrap();
