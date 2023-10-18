import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MusicianEntity } from './interfaces/musician.entity';

@Injectable()
export class MusicianService {
  constructor(
    @InjectRepository(MusicianEntity)
    private readonly musicianRepository: Repository<MusicianEntity>,
  ) {}
}
