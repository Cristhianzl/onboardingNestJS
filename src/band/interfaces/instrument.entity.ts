import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MusicianEntity } from './musician.entity';

@Index('instrument_pkey', ['id'], { unique: true })
@Entity('instrument', { schema: 'public' })
export class InstrumentEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name' })
  name: string;

  @ManyToOne(() => MusicianEntity, (musician) => musician.instruments)
  @JoinColumn([{ name: 'musician_id', referencedColumnName: 'id' }])
  musician: MusicianEntity;
}
