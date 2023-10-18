import { Controller, Get } from '@nestjs/common';

@Controller('band')
export class BandController {
  @Get()
  async getBand() {
    return JSON.stringify({ band: 'band1' });
  }
}
