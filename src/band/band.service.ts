import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BandEntity } from './interfaces/band.entity';

@Injectable()
export class BandService {
  constructor(
    @InjectRepository(BandEntity)
    private readonly bandRepository: Repository<BandEntity>,
  ) {}

  async createBand(band: BandEntity): Promise<BandEntity> {
    return await this.bandRepository.save(band);
  }

  async getAllBands(): Promise<BandEntity[]> {
    return await this.bandRepository.find();
  }

  async deleteBand(id: number): Promise<string> {
    const deleted = await this.bandRepository.delete(id);

    if (deleted.affected === 0) {
      throw new NotFoundException(`Band with id ${id} not found`);
    }

    return `Band with id ${id} deleted`;
  }

  async getBand(id: number): Promise<BandEntity | null> {
    const band = await this.bandRepository.findOneBy({ bandId: id });

    if (!band) {
      throw new NotFoundException(`Band with id ${id} not found`);
    }

    return band;
  }

  async updateBand(id: number, band: BandEntity): Promise<BandEntity> {
    const updatedBand = await this.bandRepository.update(id, band);
    if (updatedBand.affected === 0) {
      throw new NotFoundException(`Band with id ${id} not found`);
    }
    return await this.bandRepository.findOneBy({ bandId: id });
  }
}
