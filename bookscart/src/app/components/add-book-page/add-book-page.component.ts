import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private router: Router
    ) {
   }

  ngOnInit() {
  }

  addBook(title, author, price, rating) {
    let newBook : Book = {
      title: title.value,
      author: author.value,
      price: +price.value,
      rating: +rating.value
    };
    this.bookService.addBook(newBook);
    this.router.navigate(['/home']);
  }
  
}
