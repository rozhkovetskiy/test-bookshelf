import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './main/app.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
