import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'musician' })
export class MusicianEntity {
  @PrimaryGeneratedColumn('rowid')
  musician_id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'band' })
  band: string;

  @Column({ name: 'instrument' })
  instrument: string;
}
