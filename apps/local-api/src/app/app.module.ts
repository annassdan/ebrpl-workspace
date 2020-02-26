import { Module } from '@nestjs/common';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PengunjungModule } from './endpoints/pengunjung/pengunjung.module';
import { getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [

    /**
     * Konfigurasi Database forRoot dari TypeORM Nest akan ter-inject otomatis
     * dari file 'ormconfig.json' yang berada di root folder
     */
    TypeOrmModule.forRoot({
      type: 'sqlite',
      name: 'default',
      database: '/../../local-db/local.sqlite',
      synchronize: true,
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
    }),

    PengunjungModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
