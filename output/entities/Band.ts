import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Musician } from "./Musician";

@Entity("band", { schema: "public" })
export class Band {
  @PrimaryGeneratedColumn({ type: "integer", name: "band_id" })
  bandId: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("integer", { name: "year_founded" })
  yearFounded: number;

  @Column("character varying", { name: "genre" })
  genre: string;

  @OneToOne(() => Musician, (musician) => musician.musician)
  musician: Musician;
}
