import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BandEntity } from './band.entity';
import { InstrumentEntity } from './instrument.entity';

@Index('PK_ac159e4cdf9e76ba7ffa934f8a6', ['id'], { unique: true })
@Entity('musician', { schema: 'public' })
export class MusicianEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name' })
  name: string;

  @OneToMany(() => InstrumentEntity, (instrument) => instrument.musician, {
    cascade: ['insert', 'update'],
  })
  instruments: InstrumentEntity[];

  @ManyToOne(() => BandEntity, (band) => band.musicians)
  @JoinColumn([{ name: 'band_id', referencedColumnName: 'id' }])
  band: BandEntity;
}
