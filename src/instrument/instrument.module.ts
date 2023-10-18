import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrumentEntity } from './interfaces/instrument.entity';
import { InstrumentController } from './instrument.controller';
import { InstrumentService } from './instrument.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstrumentEntity])],
  controllers: [InstrumentController],
  providers: [InstrumentService],
})
export class InstrumentModule {}
