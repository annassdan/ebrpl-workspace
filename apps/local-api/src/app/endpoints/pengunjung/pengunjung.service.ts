import { Injectable } from '@nestjs/common';
import { PengunjungRepo } from './pengunjung.repo';
import { PengunjungEntity } from './pengunjung.entity';
import { DeleteResult, FindManyOptions } from 'typeorm';

/* Informasi lengkap cara query penggunaan TypeORM di https://typeorm.io/ */
@Injectable()
export class PengunjungService {


  /* Inject Repository Pengunjung */
  constructor(private readonly pengunjungRepo: PengunjungRepo) {
  }

  /**
   * Save sebuah data berdasarkan entity
   * @param e - Entity
   */
  post(e: PengunjungEntity): Promise<PengunjungEntity> {
    return this.pengunjungRepo.save(e);
  }

  /**
   * Save beberapa data dari
   * @param es - List Entity
   */
  postAll(es: PengunjungEntity[]): Promise<PengunjungEntity[]> {
    return this.pengunjungRepo.save(es);
  }

  /**
   * Hapus sebuah data berdasarkan id
   * @param pk - PrimaryKey (ID)
   */
  deleteById(pk: number): Promise<DeleteResult> {
    return this.pengunjungRepo.delete(pk);
  }

  /**
   * Ambil sebuah databerdataskan id
   * @param pk - PrimaryKey (ID)
   */
  findById(pk: number): Promise<PengunjungEntity | undefined> {
    return this.pengunjungRepo.findOne(pk);
  }

  /**
   * Ambil seluruh data dari tabel Pengunjung
   * @param options - Options `Dokumentasi lengkapnya lihat di https://typeorm.io/`
   */
  findAll(options?: FindManyOptions<PengunjungEntity>): Promise<PengunjungEntity[]> {
    return this.pengunjungRepo.find(options ? { order: { createdAt: 'DESC' } } : { order: { createdAt: 'DESC' }, ...options })
  }

}
