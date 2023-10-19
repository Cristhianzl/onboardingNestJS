import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Instrument } from "./Instrument";
import { Band } from "./Band";

@Entity("musician", { schema: "public" })
export class Musician {
  @PrimaryGeneratedColumn({ type: "integer", name: "musician_id" })
  musicianId: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "band" })
  band: string;

  @Column("character varying", { name: "instrument" })
  instrument: string;

  @OneToOne(() => Instrument, (instrument) => instrument.instrument)
  instrument2: Instrument;

  @OneToOne(() => Band, (band) => band.musician)
  @JoinColumn([{ name: "musician_id", referencedColumnName: "bandId" }])
  musician: Band;
}
