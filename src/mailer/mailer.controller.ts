import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { CreateMailerDto } from './dto/create-mailer.dto';
import { UpdateMailerDto } from './dto/update-mailer.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}


  @Post('send-email')
  async sendEmail(@Body() createMailerDto: CreateMailerDto) {
    const to = 'ayushi@legaciestechno.com';
    const subject = 'Test Email';
    const text = '<h1>welcome to audiology</h1><br><h3><span>Please click <a href="https://onboarding.rankroverpro.com/">Hear</a> onboarding form link</span></h3>';

    await this.mailerService.sendEmail(createMailerDto);

    return 'Email sent successfully!';
  }

  @Post()
  create(@Body() createMailerDto: CreateMailerDto) {
    // return this.mailerService.create(createMailerDto);
    return "success";

  }

  @Get()
  findAll() {
    return this.mailerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMailerDto: UpdateMailerDto) {
    return this.mailerService.update(+id, updateMailerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailerService.remove(+id);
  }
}
