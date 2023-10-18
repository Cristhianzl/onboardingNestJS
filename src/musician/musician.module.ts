import { Module } from '@nestjs/common';
import { MusicianService } from './musician.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicianEntity } from './interfaces/musician.entity';
import { MusicianController } from './musician.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MusicianEntity])],
  controllers: [MusicianController],
  providers: [MusicianService],
})
export class MusicianModule {}
