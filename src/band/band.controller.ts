import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBandDto } from './dtos/createBand.dto';

@Controller('band')
export class BandController {
  @Post()
  async createBand(@Body() createBand: CreateBandDto) {}
}
