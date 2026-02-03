import { Controller, Get, Query } from '@nestjs/common';

import { GreetingDto } from './dto';
import { GreetingService } from './greeting.service';

@Controller('greeting')
export class GreetingController {
  constructor(private readonly greetingService: GreetingService) {}

  @Get()
  getGreeting(@Query('name') name?: string): GreetingDto {
    return this.greetingService.getGreeting(name);
  }
}
