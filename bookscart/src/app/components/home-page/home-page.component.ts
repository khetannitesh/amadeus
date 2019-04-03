import { Book } from './../../models/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  book: Book;

  constructor() {
    this.book = {
      title: 'The Alchemist',
      author: 'Paulo Cohelo',
      price: 23,
      rating: 4
    };
  }

  ngOnInit() {
  }

}
