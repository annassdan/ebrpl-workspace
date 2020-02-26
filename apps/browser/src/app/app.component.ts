import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'electron-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ngxtron';

  d$: Observable<any> = of({});

  data$: Observable<any> = of([]);

  constructor(private http: HttpClient) {
  }

  click() {
    this.d$ = this.http.get('http://localhost:3333/api');
  }

  gets() {
    this.data$ = this.http.get('http://localhost:3333/api/pengunjung/gets');
  }

  postNest() {
    this.http.post('http://localhost:3333/api/pengunjung/post', {
      nama: 'Annas',
      umur: 30,
      alamat: ''
    }).subscribe();
  }
}
