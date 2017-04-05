import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { GoogleBooksService } from './google-books.service';
import * as SearchActions from './search-actions';

@Injectable()
export class BookEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.ofType(SearchActions.SEARCH)
    .map((action: SearchActions.Search) => action.payload)
    .switchMap(terms => this.booksService.searchBooks(terms))
    .map(results => new SearchActions.SearchSuccess(results));
    
  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService
  ) {}
}