import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MusicianEntity } from './musician.entity';

@Entity('instrument', { schema: 'public' })
export class InstrumentEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'instrument_id' })
  instrumentId: number;

  @Column('character varying', { name: 'name' })
  name: string;

  @OneToOne(() => MusicianEntity, (musician) => musician.instrument2)
  @JoinColumn([{ name: 'instrument_id', referencedColumnName: 'musicianId' }])
  instrument: MusicianEntity;
}
