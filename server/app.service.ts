import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Kovyra this is dockerize and works fine !!!123';
  }
}
