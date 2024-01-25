import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mailer } from './entities/mailer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Mailer])],
  controllers: [MailerController],
  providers: [MailerService]
})
export class MailerModule {}
