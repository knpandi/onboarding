import { Module } from '@nestjs/common';
import { SeoRankroverService } from './seo__rankrover.service';
import { SeoRankroverController } from './seo__rankrover.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeoRankrover } from './entities/seo__rankrover.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SeoRankrover])],
  controllers: [SeoRankroverController],
  providers: [SeoRankroverService]
})
export class SeoRankroverModule {}
