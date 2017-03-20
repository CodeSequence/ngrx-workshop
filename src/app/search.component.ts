import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from './book-model';
import { GoogleBooksService } from './google-books.service';

@Component({
  selector: 'app-search',
  template: `
    <app-book-search (search)="onSearch($event)"></app-book-search>

    <app-search-results [books]="books"></app-search-results>
  `
})
export class SearchComponent {
  books: Book[] = [];

  constructor(
    private booksService: GoogleBooksService
  ) {}

  onSearch(terms: string) {
    this.booksService.searchBooks(terms)
      .subscribe(results => this.books = results);
  }
}
