import { PengunjungEntity } from './pengunjung.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(PengunjungEntity)
export class PengunjungRepo extends Repository<PengunjungEntity> {
  /**
   * Jika tidak ada custom query tambahan, maka biarkan kosong fungsi yang ada pada class ini
   * Jika hanya menggunakan fungsi CRUD standard
   */


}
