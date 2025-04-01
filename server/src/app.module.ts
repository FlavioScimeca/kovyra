import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [HealthModule, HelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
