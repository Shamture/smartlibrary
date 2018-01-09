import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IBook } from './IBook';

@Injectable()
export class GoogleBookService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) { }

  /**
   * Search books
   * @param queryTitle
   */
  searchBooks(queryTitle: string): Observable<IBook[]> {
    return this.http.get(`${this.API_PATH}?q=isbn:${queryTitle}`)
      .map(res => res.json().items || []);
  }

  /**
   * Retrieve Books
   * @param volumeId
   */
  retrieveBook(volumeId: string): Observable<IBook> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }

}
