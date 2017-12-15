import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../shared/interfaces/book.interface';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  private id: number;
  public book: Book;
  constructor( private activatedRoute: ActivatedRoute,
               private bookService: BookService) {
      this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  private getBookDetails (id: number) {
    this.bookService.getBookDetails(id)
      .subscribe((response) => this.book = response);
  }


  ngOnInit() {
    this.getBookDetails(this.id);
  }

}
