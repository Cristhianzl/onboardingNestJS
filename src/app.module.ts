import { Module } from '@nestjs/common';
import { BandModule } from './band/band.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicianModule } from './musician/musician.module';
import { InstrumentModule } from './instrument/instrument.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      synchronize: true,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    }),
    BandModule,
    MusicianModule,
    InstrumentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
