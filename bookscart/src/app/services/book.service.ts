import { Book } from './../models/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  constructor() {
    this.books = [
      {
        title: 'The Alchemist',
        author: 'Paulo Cohelo',
        price: 23,
        rating: 4
      },
      {
        title: 'Five point someone',
        author: 'Chetan Bhagat',
        price: 13,
        rating: 1
      },
      {
        title: 'The monk who sold his ferrari',
        author: 'Robin Sharma',
        price: 25,
        rating: 3
      },
      {
        title: 'Four hour work week',
        author: 'Tim Ferris',
        price: 27,
        rating: 5
      }
    ];
  }

  getBooks() {
    return this.books;
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
  }

}
