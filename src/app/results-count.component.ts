import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-results-count',
  template: `
    <md-card>
      <md-card-title>Search Results: {{ count | async }}</md-card-title>
    </md-card>
  `,
  styles: [`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }  
  `]
})
export class ResultsCountComponent implements OnInit {
  count: Observable<number>;

  constructor(
    private store: Store<fromRoot.State>
    ) {
      this.count = store.select(fromRoot.selectCount);
    }

  ngOnInit() {
  }

}
