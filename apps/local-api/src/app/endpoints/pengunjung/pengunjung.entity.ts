import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 * Name 'pengunjung' akan menjadi nama tabel di database,
 * jika 'name' tidak dideklarasikan, maka nama tabel akan default mengikuti
 * nama kelas ini 'PengunjungEntity' akan membentuk 'pengunjung_entity'
 */
  @Entity({ name: 'pengunjung'})
export class PengunjungEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  /* Otomatis menghasilkan tanggal createdAt */
  @CreateDateColumn()
  createdAt: Date;

  /* Otomatis menghasilkan tanggal lastModifiedAt */
  @UpdateDateColumn()
  lastModifiedAt: Date;

  @Column({ length: 255 })
  nama: string;

  @Column()
  umur: number;

  @Column({ type: 'text'})
  alamat: string;

}
