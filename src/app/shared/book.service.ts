import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './interfaces/book.interface';
import { Observable } from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookService {
  private bookUrl = 'api/books';

  constructor(
    private http: HttpClient) { }

  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl)
      .pipe(
        catchError(this.handleError('getBooks', []))
      );
  }

  getBookDetails(id: number): Observable<Book> {
    const url = `${this.bookUrl}/${id}`;
    return this.http.get<Book>(url)
      .pipe(
        catchError(this.handleError<Book>(`getBookDetails id=${id}`))
      );
  }

  private handleError<T> (operation, result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}
