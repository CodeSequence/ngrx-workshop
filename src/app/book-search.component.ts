import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  template: `
    <md-card>
      <md-card-title>Find a Book</md-card-title>
      <md-card-content>
        <md-input-container>
          <input mdInput placeholder="Search for a book" [formControl]="searchTerms">
        </md-input-container>
      </md-card-content>
    </md-card>
  `,
  styles: [`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }
    input {
      width: 300px;
    }
  `]
})
export class BookSearchComponent implements OnInit {
  searchTerms: FormControl = new FormControl();

  @Input() set value(val: string) {
    this.searchTerms.setValue(val, { onlySelf: true, emitEvent: false });
  }

  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.searchTerms
      .valueChanges
      .debounceTime(500)
      .filter(terms => terms !== '' && terms !== this.value)
      .subscribe(this.search);
  }
}
