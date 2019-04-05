import { BookService } from './../../services/book.service';
import { Book } from './../../models/interfaces';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[];
  authors: string[];
  selectedAuthor: string;
  color: string = 'green';
  today: Date;

  constructor(
    private bookService: BookService,
    private http: HttpClient
    ) {
  }

  ngOnInit() {
    //this.books = this.bookService.getBooks();

    this.bookService
      .getBooks()
      .subscribe(res => {
        this.books = res;
        this.authors = res
          .map(b => b.author)
          .reduce( (res, a) => res.indexOf(a) == -1 ? res.concat(a) : res, []);
      });
    this.selectedAuthor = 'ALL';
    this.today = new Date();
  }

  rateUp(book: Book) {
    this.bookService
      .rateUp(book)
      .subscribe();
  }

  selectAuthor(authorDropdown) {
    this.selectedAuthor = authorDropdown.value;
  }

  rateDown(book: Book) {
    this.bookService
      .rateDown(book)
      .subscribe();
  }
}
