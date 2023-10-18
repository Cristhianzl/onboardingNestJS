import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateBandDto } from './dtos/createBand.dto';
import { BandService } from './band.service';

@Controller('band')
export class BandController {
  constructor(private readonly bandService: BandService) {}

  @Post()
  async createBand(@Body() createBand: CreateBandDto) {
    return this.bandService.createBand(createBand);
  }

  @Get()
  async getAllBands() {
    return this.bandService.getAllBands();
  }

  @Delete()
  async deleteBand(@Query('band_id') band_id: number): Promise<Object> {
    const message = await this.bandService.deleteBand(band_id);
    return await { code: 200, message: message };
  }

  @Get(':band_id')
  async getBand(@Param('band_id') band_id: number) {
    return this.bandService.getBand(band_id);
  }
}
