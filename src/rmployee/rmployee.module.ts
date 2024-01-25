import { Module } from '@nestjs/common';
import { RmployeeService } from './rmployee.service';
import { RmployeeController } from './rmployee.controller';
import { Rmployee } from './entities/rmployee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Rmployee])],
  controllers: [RmployeeController],
  providers: [RmployeeService]
})
export class RmployeeModule {}
