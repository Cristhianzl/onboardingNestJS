import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MusicianEntity } from './musician.entity';

@Index('PK_e79403bf135719498a1c562a946', ['id'], { unique: true })
@Entity('band', { schema: 'public' })
export class BandEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name' })
  name: string;

  @Column('integer', { name: 'year_founded' })
  yearFounded: number;

  @Column('character varying', { name: 'genre' })
  genre: string;

  //sempre colocar no OneToMany o cascade
  @OneToMany(() => MusicianEntity, (musician) => musician.band, {
    cascade: ['insert', 'update'],
  })
  musicians: MusicianEntity[];
}
