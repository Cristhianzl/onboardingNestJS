import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InstrumentEntity } from './instrument.entity';
import { BandEntity } from './band.entity';

@Entity('musician', { schema: 'public' })
export class MusicianEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'musician_id' })
  musicianId: number;

  @Column('character varying', { name: 'name' })
  name: string;

  @Column('character varying', { name: 'band' })
  band: string;

  @Column('character varying', { name: 'instrument' })
  instrument: string;

  @OneToOne(() => InstrumentEntity, (instrument) => instrument.instrument)
  instrument2: InstrumentEntity;

  @OneToOne(() => BandEntity, (band) => band.musician)
  @JoinColumn([{ name: 'musician_id', referencedColumnName: 'bandId' }])
  musician: BandEntity;
}
