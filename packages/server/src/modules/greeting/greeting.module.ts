import { Module } from '@nestjs/common';

import { GreetingController } from './greeting.controller';
import { GreetingService } from './greeting.service';

@Module({
  controllers: [GreetingController],
  providers: [GreetingService],
  exports: [GreetingService],
})
export class GreetingModule {}
