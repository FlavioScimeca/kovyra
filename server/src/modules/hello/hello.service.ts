import { Injectable } from '@nestjs/common';
import { HelloResponse } from './interfaces/hello.interface';

@Injectable()
export class HelloService {
  /**
   * Returns a hello message
   * @param name Optional name to personalize greeting
   * @returns HelloResponse object with message and timestamp
   */
  getHello(name?: string): HelloResponse {
    const message = name ? `Ciao, ${name}!` : 'Hello, World!';

    return {
      message,
      timestamp: new Date().toISOString(),
    };
  }
}
