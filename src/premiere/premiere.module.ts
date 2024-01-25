import { Module } from '@nestjs/common';
import { PremiereService } from './premiere.service';
import { PremiereController } from './premiere.controller';
import { Premiere } from './entities/premiere.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Premiere])],
  controllers: [PremiereController],
  providers: [PremiereService]
})
export class PremiereModule {}
