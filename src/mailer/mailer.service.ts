import { Injectable } from '@nestjs/common';
import { CreateMailerDto } from './dto/create-mailer.dto';
import { UpdateMailerDto } from './dto/update-mailer.dto';
import * as nodemailer from 'nodemailer';


@Injectable()
export class MailerService {
  private transporter;

  constructor() {
    // create reusable transporter object using the default SMTP transport
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // replace with your SMTP server
      // port: 587,
      // secure: false, // true for 465, false for other ports
      auth: {
        user: 'nagapandik@legaciestechno.com',
        pass: 'Pandi@123',
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async sendEmail(createMailerDto:CreateMailerDto) {
    console.log(createMailerDto.pdf)
    // send mail with defined transport object
    const info = await this.transporter.sendMail({
      from: 'nagapandik@legaciestechno.com', // sender address
      to:createMailerDto.to, // list of receivers
      subject:createMailerDto.subject, // Subject line
      html:createMailerDto.text,
      attachments: [
        {
          fileName:createMailerDto.fileName,
          // contentType: 'application/pdf',
          path:createMailerDto.pdf,
        },
      ], // plain text body
    });

    // console.log('Message sent: %s', info.messageId);
  }
  create(createMailerDto: CreateMailerDto) {

    return 'This action adds a new mailer';
  }

  findAll() {
    return `This action returns all mailer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailer`;
  }

  update(id: number, updateMailerDto: UpdateMailerDto) {
    return `This action updates a #${id} mailer`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailer`;
  }
}
