import { Book } from './../models/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private authors: string[];

  constructor() {
    this.books = [
      {
        id: 1,
        title: 'The Alchemist',
        author: 'Paulo Cohelo',
        price: 23,
        rating: 4
      },
      {
        id: 2,
        title: 'Five point someone',
        author: 'Chetan Bhagat',
        price: 13,
        rating: 1
      },
      {
        id: 3,
        title: 'The monk who sold his ferrari',
        author: 'Paulo Cohelo',
        price: 25,
        rating: 3
      },
      {
        id: 4,
        title: 'Four hour work week',
        author: 'Tim Ferris',
        price: 27,
        rating: 5
      }
    ];
    this.authors = this.books
      .map(b => b.author)
      .reduce((res, a) => res.indexOf(a) == -1 ? res.concat(a) : res, []);
  }

  getBooks() {
    return this.books;
  }

  getAuthors() {
    return this.authors;
  }

  getBookById(id: number) {
    return this.books.find(book => book.id == id);
  }

  rateUp(book: Book) {
    if(book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if(book.rating > 1)
      book.rating--;
  }

  addBook(book: Book) {
    this.books.unshift(book);
    this.authors.indexOf(book.author) === -1 && this.authors.push(book.author);
  }

}
