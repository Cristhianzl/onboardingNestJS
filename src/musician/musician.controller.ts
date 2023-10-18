import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMusicianDto } from './dtos/createMusician.dto';
import { MusicianService } from './musician.service';

@Controller('band')
export class MusicianController {
  constructor(private readonly musicianService: MusicianService) {}
}
