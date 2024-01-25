import { Module } from '@nestjs/common';
import { AudDentalService } from './aud_dental.service';
import { AudDentalController } from './aud_dental.controller';
import { AudDental } from './entities/aud_dental.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([AudDental])],
  controllers: [AudDentalController],
  providers: [AudDentalService]
})
export class AudDentalModule {}
