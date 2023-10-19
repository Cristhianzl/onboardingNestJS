import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Instrument } from "./Instrument";
import { Band } from "./Band";

@Index("PK_ac159e4cdf9e76ba7ffa934f8a6", ["id"], { unique: true })
@Entity("musician", { schema: "public" })
export class Musician {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @OneToMany(() => Instrument, (instrument) => instrument.musician)
  instruments: Instrument[];

  @ManyToOne(() => Band, (band) => band.musicians)
  @JoinColumn([{ name: "band_id", referencedColumnName: "id" }])
  band: Band;
}
