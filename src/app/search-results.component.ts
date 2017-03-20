import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  template: `
    <div class="books">
     <md-card *ngFor="let book of books" class="book">
       <md-card-title-group>
        <img md-card-sm-image
          *ngIf="book.volumeInfo.imageLinks?.smallThumbnail"
          [src]="book.volumeInfo.imageLinks?.smallThumbnail"/>
          <md-card-title>{{ book.volumeInfo.title }}</md-card-title>
        </md-card-title-group>
      </md-card>
    </div>
  `,
  styles: [`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }

    md-card.book {
      width: 400px;
      height: 150px;
      margin: 15px;
    }

    div.books {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }  
  `]
})
export class SearchResultsComponent implements OnInit {
  @Input() books;

  constructor() { }

  ngOnInit() {
  }

}
