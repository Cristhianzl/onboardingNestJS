import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Musician } from "./Musician";

@Index("instrument_pkey", ["id"], { unique: true })
@Entity("instrument", { schema: "public" })
export class Instrument {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @ManyToOne(() => Musician, (musician) => musician.instruments)
  @JoinColumn([{ name: "musician_id", referencedColumnName: "id" }])
  musician: Musician;
}
