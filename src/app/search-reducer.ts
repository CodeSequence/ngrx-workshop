import { Book } from './book-model';
import * as SearchActions from './search-actions';

export interface State {
  searchTerms: string;
  results: Book[]
}

const initialState: State = {
  searchTerms: '',
  results: []
};

export function reducer(state = initialState, action: SearchActions.All): State {
  switch(action.type) {
    case SearchActions.SEARCH: {
      return {
        ...state,
        searchTerms: action.payload
      };
    }

    case SearchActions.SEARCH_SUCCESS: {
      return {
        ...state,
        results: action.payload
      };
    }

    default: {
      return state;
    }
  }
}