import { Module } from '@nestjs/common';
import { SuccessService } from './success.service';
import { SuccessController } from './success.controller';

@Module({
  controllers: [SuccessController],
  providers: [SuccessService]
})
export class SuccessModule {}
