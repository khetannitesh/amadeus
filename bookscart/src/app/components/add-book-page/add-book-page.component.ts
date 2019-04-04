import { badBook } from './../../validators/badBook';
import { numeric } from './../../validators/numeric';
import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {
  bookForm: FormGroup; 

  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  get title() {
    return this.bookForm.get('title');
  }

  get author() {
    return this.bookForm.get('author');
  }

  get price() {
    return this.bookForm.get('price');
  }

  get tags() {
    return this.bookForm.get('tags') as FormArray;
  }

  addTag() {
    this.tags.push(new FormControl(''));
  }

  save() {
    console.log(this.bookForm.value);
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(4)] ),
      author: new FormControl('', [Validators.required]),
      price: new FormControl('', numeric),
      rating: new FormControl(''),
      authorDetails: new FormGroup({
        city: new FormControl(''),
        numOfBooks: new FormControl('')
      }),
      tags: new FormArray([new FormControl('')])
    }, {validators: badBook});
  }

  reset() {
    this.bookForm.patchValue({
      title: 'Default Title',
      rating: 3,
      authorDetails: {
        city: 'Delhi'
      }
    });
    //this.bookForm.get('title').setValue('New Title');
  }

  // updateName() {
  //   this.name.setValue('Hello World');
  // }

  addBook() {
    console.log(this.bookForm.value);
    let newBook: Book = this.bookForm.value;
    newBook.price = +newBook.price;
    newBook.rating = +newBook.rating;

    this.bookService.addBook(newBook);
    this.router.navigate(['/home']);
  }

}
