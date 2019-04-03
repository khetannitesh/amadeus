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
        author: 'Robin Sharma',
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
  }

  getBooks() {
    return this.books;
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
  }

}
