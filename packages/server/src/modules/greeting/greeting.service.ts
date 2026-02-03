import { Injectable } from '@nestjs/common';

import { GreetingDto } from './dto';

@Injectable()
export class GreetingService {
  getGreeting(name?: string): GreetingDto {
    const displayName = name || 'World';

    return {
      message: `Hello, ${displayName}!`,
      timestamp: new Date().toISOString(),
    };
  }
}
