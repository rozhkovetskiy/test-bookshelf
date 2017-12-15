import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './main/app.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './shared/services/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    BookDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
