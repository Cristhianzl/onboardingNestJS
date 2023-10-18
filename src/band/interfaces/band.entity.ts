import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'band' })
export class BandEntity {
  @PrimaryGeneratedColumn('rowid')
  band_id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'year_founded' })
  year_founded: number;

  @Column({ name: 'genre' })
  genre: string;
}
