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

  /**
   * Get Books
   */
  getBooks(): Observable<IBook[]> {
    console.log('getbooks()');
    return this.http.get<IBook[]>(this.baseUrl)
      .pipe(
        tap(books => this.log(`fetched books`)),
        catchError(this.handleError)
      );
  }

  /**
   * Get Book
   * @param id
   */
  getBook(id: string): Observable<IBook> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IBook>(url)
      .catch(this.handleError);
  }

  /**
   * Delete Book
   * @param book
   */
  deleteBook(book: IBook | string): Observable<Response> {
    const id = typeof book === 'string' ? book : book.id;
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<IBook>(url, httpOptions)
      .catch(this.handleError);
  }

  /**
   * Save Book
   * @param book
   */
  saveBook(book: IBook): Observable<IBook> {
    return this.updateBook(book);
  }

  /**
   * Add Book
   * @param book
   */
  addBook(book: IBook): Observable<IBook> {
    return this.createBook(book);
  }

  /**
   * Create Book
   * @param book
   */
  private createBook(book: IBook): Observable<IBook> {
    book.id = undefined;
    return this.http.post<IBook>(this.baseUrl, book, httpOptions)
    .catch(this.handleError);
  }

  /**
   * Update Book
   * @param book
   */
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put(this.baseUrl, book, httpOptions)
      .catch(this.handleError);
  }

  /**
   * Handle Error
   * @param error
   */
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return Observable.throw(error);
  }

  /**
   * Common log
   * @param message
   */
  private log(message: string) {
    console.log(message);
  }

}
