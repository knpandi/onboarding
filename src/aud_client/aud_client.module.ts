import { Module } from '@nestjs/common';
import { AudClientService } from './aud_client.service';
import { AudClientController } from './aud_client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AudClient } from './entities/aud_client.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AudClient])],
  controllers: [AudClientController],
  providers: [AudClientService]
})
export class AudClientModule {}
