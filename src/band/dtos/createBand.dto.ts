export type CreateBandDto = {
  id: number;
  name: string;
  year_founded: number;
  genre: string;
  musicians: CreateMusicianDto[];
};

export type CreateInstrumentDto = {
  id: number;
  name: string;
};

export type CreateMusicianDto = {
  id: number;
  name: string;
  instruments: CreateInstrumentDto[];
};
