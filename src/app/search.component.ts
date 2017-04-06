import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from './book-model';
import { GoogleBooksService } from './google-books.service';

import { Store } from '@ngrx/store';
import * as SearchActions from './search-actions';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-search',
  template: `
    <app-book-search [value]="terms | async" (search)="onSearch($event)"></app-book-search>

    <app-results-count></app-results-count>

    <app-search-results [books]="books | async"></app-search-results>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  terms: Observable<string>;
  books: Observable<Book[]>;

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<fromRoot.State>
  ) {
    this.terms = store.select(fromRoot.selectTerms);
    this.books = store.select(fromRoot.selectResults);
  }

  onSearch(terms: string) {
    this.store.dispatch(new SearchActions.Search(terms));
    
    this.booksService.searchBooks(terms)
      .subscribe(results => this.store.dispatch(new SearchActions.SearchSuccess(results)));
  }
}
