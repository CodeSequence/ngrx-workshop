import { Action } from '@ngrx/store';
import { Book } from './book-model';

export const SEARCH =         '[Books] Search';
export const SEARCH_SUCCESS = '[Books] Search Success';

export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;

  constructor(public payload: Book[]) {}
}

export type All
  = Search
  | SearchSuccess;