import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { GreetingModule } from './greeting/greeting.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [ConfigModule, GreetingModule, StatusModule],
})
export class APIModule {}
