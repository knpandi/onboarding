import { Module } from '@nestjs/common';
import { PpcRankroverService } from './ppc_rankrover.service';
import { PpcRankroverController } from './ppc_rankrover.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PpcRankrover } from './entities/ppc_rankrover.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PpcRankrover])],
  controllers: [PpcRankroverController],
  providers: [PpcRankroverService]
})
export class PpcRankroverModule {}
