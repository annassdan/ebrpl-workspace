import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { PengunjungService } from './pengunjung.service';
import { PengunjungEntity } from './pengunjung.entity';

/**
 * API Endpoint Prefix (example: http://xxx.com/pengunjung OR https://xxx.com/pengunjung)
 */
@Controller('pengunjung')
export class PengunjungController {

  /* Injject Pengunjung Service */
  constructor(private readonly pengunjungService: PengunjungService) {
  }

  @Get()
  getSaja(): string {
    return 'annas';
  }

  /**
   * API Endpoint untuk mengambil semua data dari tabel pengunjung
   * Method: GET
   */
  @Get('gets')
  async findAll(): Promise<PengunjungEntity[]> {
    return this.pengunjungService.findAll();
  }

  /**
   * API Endpoint untuk mengambil sebuah data dari tabel pengunjung
   * Method: GET
   * @param id - PrimaryKey (ID)
   */
  @Get('get/:id')
  findById(@Param('id') id: any): Promise<PengunjungEntity> {
    return this.pengunjungService.findById(id)
      .catch(() => { throw new NotFoundException('Data Tidak ditemukan') });
  }

  /**
   * API Endpoint untuk menyimpan sebuah data
   * Method: POST
   * @param e - Body request PengunjungEntity
   */
  @Post('post')
  post(@Body() e: PengunjungEntity) {
    return this.pengunjungService.post(e);
  }

  /**
   * API Endpoint untuk menyimpan beberapa data
   * Method: POST
   * @param es - Body Request berupa List dari PengunjungEntity
   */
  @Post('posts')
  postAll(@Body() es: PengunjungEntity[]) {
    return this.pengunjungService.postAll(es);
  }

  /**
   * API Endpoint untuk menghapus sebuah data berdasarkan id
   * Method: DELETE
   * @param id - PrimaryKey (ID)
   */
  @Delete('delete/:id')
  deleteById(@Param('id') id: any) {
    return this.pengunjungService.deleteById(id);
  }


}
