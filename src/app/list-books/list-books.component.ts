import { Component, OnInit } from '@angular/core';

import { BookService } from '../shared/book.service';
import { Book } from '../shared/interfaces/book.interface';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  public books: Book[];

  constructor(
    private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((response) => this.books = response);
  }
}
