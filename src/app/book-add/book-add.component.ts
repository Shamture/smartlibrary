import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../service/google-book.service';
import { IBook } from '../service/IBook';
import { BookService } from '../service/book.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})

/**
 * Add books in admin mode
 */
export class BookAddComponent implements OnInit {
  private sub: Subscription;
  errorMessage: string;
  book: IBook = {
    id: '',
    bookTitle: '',
    cover: '',
    isbn: '',
    author: '',
    issued: false,
    description: '',
    starRating: 0,
    qrcode: '',
    renewDateTime: '',
    userName: '',
    issuedDateTime: '',
    userId: '',
    genre: '',
    location: ''
  };
  isbn = '9283224175';

  constructor(private googlebook: GoogleBookService, private service: BookService,
    private route: ActivatedRoute,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('book Add ngOnInit');
  }

  /**
   * Search book
   * @param isbn
   */
  searchbook(isbn): void {
    console.log('searchbook >>>>>', isbn);
    this.googlebook.searchBooks(isbn)
      .subscribe(data => this.parseBookData(data),
      error => console.error('Error: ' + error));
  }

  /**
   * Get books
   * @param id
   */
  getBook(id: string): void {
    this.service.getBook(id)
      .subscribe(
      book => this.book = book,
      (error: any) => this.errorMessage = <any>error);
  }

  /**
   * Add books
   * @param book
   */
  addBook(book): void {
    this.service.saveBook(book)
      .subscribe(
      () => this.onAdded(),
      (error: any) => this.errorMessage = <any>error
      );
  }

  /**
   * Called on book added
   */
  onAdded(): void {
    // Reset the form to clear the flags
    this.router.navigate(['/books']);
  }

  /**
   * Handle cancel button
   */
  cancel(): void {
    this.router.navigate(['/books']);
  }

  /**
   * Delete Book
   * @param book
   */
  delete(book): void {
    this.service.deleteBook(book)
      .subscribe(
      () => this.onDeleted(),
      (error: any) => this.errorMessage = <any>error
      );
  }

  /**
   * Called on deleted
   */
  onDeleted(): void {
    this.snackBar.open('Deleted succesfully ', this.book.id, {
      duration: 2000,
    });
    this.router.navigate(['/books']);
  }

  /**
   * Helper function to parse Book data from Google API
   * @param book
   */
  private parseBookData(book) {
    this.book.id = book[0].id;
    this.book.author = book[0].volumeInfo.authors;
    this.book.bookTitle = book[0].volumeInfo.title;
    this.book.description = book[0].volumeInfo.description;
    this.book.starRating = book[0].volumeInfo.averageRating;
    this.book.cover = book[0].volumeInfo.imageLinks === undefined ? '' : book[0].volumeInfo.imageLinks.thumbnail;
    this.book.isbn = this.isbn;
    this.book.genre = book[0].volumeInfo.categories;
    this.book.renewDateTime = '';
    this.book.userId = '';
    this.book.userName = '';
    this.book.issuedDateTime = '';
    this.book.location = '';
  }
}
