import * as fromSearch from './search-reducer';

export interface State {
  search: fromSearch.State;
}

export const reducers = {
  search: fromSearch.reducer
};