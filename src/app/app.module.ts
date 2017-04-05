import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';

import { GoogleBooksService } from './google-books.service';
import { BookSearchComponent } from './book-search.component';
import { SearchResultsComponent } from './search-results.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ResultsCountComponent } from './results-count.component';

import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './book-effects';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookSearchComponent,
    SearchResultsComponent,
    ResultsCountComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent }
    ]),
    StoreModule.provideStore(reducers),
    EffectsModule.run(BookEffects)
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
