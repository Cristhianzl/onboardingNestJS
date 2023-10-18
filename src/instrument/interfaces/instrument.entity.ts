import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'instrument' })
export class InstrumentEntity {
  @PrimaryGeneratedColumn('rowid')
  instrument_id: number;

  @Column({ name: 'name' })
  name: string;
}
