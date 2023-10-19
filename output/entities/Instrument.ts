import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Musician } from "./Musician";

@Entity("instrument", { schema: "public" })
export class Instrument {
  @PrimaryGeneratedColumn({ type: "integer", name: "instrument_id" })
  instrumentId: number;

  @Column("character varying", { name: "name" })
  name: string;

  @OneToOne(() => Musician, (musician) => musician.instrument2)
  @JoinColumn([{ name: "instrument_id", referencedColumnName: "musicianId" }])
  instrument: Musician;
}
