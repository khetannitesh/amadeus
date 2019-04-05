import { HttpClient } from '@angular/common/http';
import { Book } from './../models/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private authors: string[];
  private url : string = 'http://localhost:3000/books/';

  constructor(private http: HttpClient) {
    
  }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.url, {
      headers: {
        'token': 'mysampletoken'
      }
    });
  }

  getAuthors() {
    return this.authors;
  }

  getBookById(id: number) {
    return this.books.find(book => book.id == id);
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
    return this.http.put(this.url + book.id, book);
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
      return this.http.put(this.url + book.id, book);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }

}
