import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MusicianEntity } from './musician.entity';

@Entity('band', { schema: 'public' })
export class BandEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'band_id' })
  bandId: number;

  @Column('character varying', { name: 'name' })
  name: string;

  @Column('integer', { name: 'year_founded' })
  yearFounded: number;

  @Column('character varying', { name: 'genre' })
  genre: string;

  @OneToOne(() => MusicianEntity, (musician) => musician.musician)
  musician: MusicianEntity;
}
