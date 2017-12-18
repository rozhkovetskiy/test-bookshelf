import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './main/app.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

// Services
import { BookService } from './shared/book.service';
import { InMemoryDataService} from './shared/services/in-memory-data.service';

// Modules
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

// Pipes
import { SortByPipe } from './shared/pipes/sort-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    BookDetailsComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    HttpClientModule,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
