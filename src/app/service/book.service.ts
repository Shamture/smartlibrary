import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { IBook } from './IBook';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class BookService {

  private baseUrl = 'app/books';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<IBook[]> {
    console.log('getbooks()');
    return this.http.get<IBook[]>(this.baseUrl)
      .pipe(
        tap(books => this.log(`fetched books`)),
        catchError(this.handleError)
      );
  }

  getBook(id: string): Observable<IBook> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IBook>(url)
      .catch(this.handleError);
  }

  deleteBook(book: IBook | string): Observable<Response> {
    const id = typeof book === 'string' ? book : book.id;
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<IBook>(url, httpOptions)
      .catch(this.handleError);
  }

  saveBook(book: IBook): Observable<IBook> {
    return this.updateBook(book);
  }

  addBook(book: IBook): Observable<IBook> {
    return this.createBook(book);
  }

  private createBook(book: IBook): Observable<IBook> {
    book.id = undefined;
    return this.http.post<IBook>(this.baseUrl, book, httpOptions)
    .catch(this.handleError);
  }

  updateBook(book: IBook): Observable<IBook> {
    return this.http.put(this.baseUrl, book, httpOptions)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return Observable.throw(error);
  }

  private log(message: string) {
    console.log(message);
  }

}
