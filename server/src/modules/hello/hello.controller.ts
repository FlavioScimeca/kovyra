import { Controller, Get, Query } from '@nestjs/common';
import { HelloRequestDto } from './dto/hello.dto';
import { HelloService } from './hello.service';
import { HelloResponse } from './interfaces/hello.interface';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  /**
   * Returns a hello world message
   * @param queryParams Optional parameters with name
   * @returns HelloResponse with message and timestamp
   */
  @Get()
  getHello(@Query() queryParams: HelloRequestDto): HelloResponse {
    return this.helloService.getHello(queryParams.name);
  }
}
