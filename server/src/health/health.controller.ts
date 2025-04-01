import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    // Temporarily disabled database check until TypeORM is configured
    // return this.health.check([() => this.db.pingCheck('database')]);
    return this.health.check([]);
  }
}
