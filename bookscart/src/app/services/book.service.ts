import { HttpClient } from '@angular/common/http';
import { Book } from './../models/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return this.http.get<Book[]>(this.url);
    // return this.http.get<Book[]>(this.url, {
    //   headers: {
    //     token: 'mysampletoken'
    //   }
    // });
  }

  getBooksAndAuthors() : Observable<any> {
    return this.http
      .get(this.url)
      .pipe(
        map( (res : Book[]) => {
          return {
            books: res,
            authors: res.map(b => b.author).reduce( (res, a) => res.indexOf(a) == -1 ? res.concat(a) : res, [])
          }
        })
      )
  }

  getAuthors() {
    return this.authors;
  }

  getBookById(id: number) : Observable<Book>{
    return this.http.get<Book>(this.url + id);
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
