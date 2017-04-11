import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookSearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent }
    ])
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
