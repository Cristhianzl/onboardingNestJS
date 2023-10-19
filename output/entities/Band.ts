import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Musician } from "./Musician";

@Index("PK_e79403bf135719498a1c562a946", ["id"], { unique: true })
@Entity("band", { schema: "public" })
export class Band {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("integer", { name: "year_founded" })
  yearFounded: number;

  @Column("character varying", { name: "genre" })
  genre: string;

  @OneToMany(() => Musician, (musician) => musician.band)
  musicians: Musician[];
}
