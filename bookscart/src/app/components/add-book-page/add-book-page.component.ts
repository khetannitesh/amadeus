import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {
  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    rating: new FormControl(''),
  });

  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  save() {
    console.log(this.bookForm.value);
  }

  ngOnInit() {
  }

  // updateName() {
  //   this.name.setValue('Hello World');
  // }

  addBook() {
    let newBook: Book = this.bookForm.value;
    newBook.price = +newBook.price;
    newBook.rating = +newBook.rating;

    this.bookService.addBook(newBook);
    this.router.navigate(['/home']);
  }

}
