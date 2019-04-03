import { Book } from './../../models/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[];

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
  ]
  }

  ngOnInit() {
  }

  rateUp(book: Book) {
    if(book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if(book.rating > 1)
      book.rating--;
  }

  addBook(title, author, price, rating) {
    let newBook : Book = {
      title: title.value,
      author: author.value,
      price: +price.value,
      rating: +rating.value
    };
    this.books.unshift(newBook);
  }

}
