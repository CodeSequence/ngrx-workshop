import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book-model';

@Injectable()
export class GoogleBooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) {}

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .catch(() => {
        if (queryTitle === 'RxJS') {
          return this.http.get('/assets/rxjs.json');
        } else if (queryTitle === 'Star Wars Bloodline') {
          return this.http.get('/assets/starwars.json');
        } else {
          return this.http.get('/assets/empty.json');
        }
      })
      .map(res => res.json().items || []);
  }
}
