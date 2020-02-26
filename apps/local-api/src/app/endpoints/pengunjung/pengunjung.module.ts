import { Module } from '@nestjs/common';
import { PengunjungController } from './pengunjung.controller';
import { PengunjungService } from './pengunjung.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PengunjungRepo } from './pengunjung.repo';

/* MODULE PERCOBAAN MENGGUNAKAN SQLITE */


@Module({
  /**
   * Untuk dapat mengimport type orm, maka install NestJs TypeORM Wrapper 'npm install --save @nestjs/typeorm'
   * forFeature, maksudnya untuk TypeOrm Repo yang akan dideklarasikan dalam ruang lingkup module ini.
   * Baiknya setiap 1 entity, menggunakan 1 buah module, agar mudah untuk di manage
   */
  imports: [ TypeOrmModule.forFeature([PengunjungRepo])  ],

  controllers: [PengunjungController],
  providers: [PengunjungService]
})
export class PengunjungModule {}
