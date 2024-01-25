import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateStripeService } from './create_stripe.service';
import { CreateCreateStripeDto } from './dto/create-create_stripe.dto';
import { UpdateCreateStripeDto } from './dto/update-create_stripe.dto';

@Controller('create-stripe')
export class CreateStripeController {
  constructor(private readonly createStripeService: CreateStripeService) {}

  @Post('create')
  create(@Body() createCreateStripeDto: CreateCreateStripeDto) {
    return this.createStripeService.create(createCreateStripeDto);
  }

  @Get('findAll')
  findAll() {
    return this.createStripeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.createStripeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreateStripeDto: UpdateCreateStripeDto) {
    return this.createStripeService.update(+id, updateCreateStripeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.createStripeService.remove(+id);
  }
}
