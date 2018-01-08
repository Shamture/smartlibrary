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

export class BookAddComponent implements OnInit {
  private sub: Subscription;
  errorMessage: string;
  book: IBook;

  constructor(private googlebook: GoogleBookService, private service: BookService,
    private route: ActivatedRoute,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('book Add ngOnInit');
  }

  searchbook(isbn): void {
    console.log('searchbook >>>>>', isbn);
    this.googlebook.searchBooks(isbn)
    .subscribe(data => this.parseBookData(data),
    error => console.error('Error: ' + error));
  }

  getBook(id: string): void {
    this.service.getBook(id)
      .subscribe(
      book => this.book = book,
      (error: any) => this.errorMessage = <any>error);
  }

  saveBook(book): void {
    console.log('author', this.book.author);
    this.service.saveBook(book)
      .subscribe(
      () => this.onSaved(),
      (error: any) => this.errorMessage = <any>error
      );
  }

  onSaved(): void {
    // Reset the form to clear the flags
    this.router.navigate(['/books']);
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }

  delete(book): void {
    this.service.deleteBook(book)
    .subscribe(
      () => this.onDeleted(),
      (error: any) => this.errorMessage = <any>error
      );
  }

  onDeleted(): void {
    this.snackBar.open('Deleted succesfully ', this.book.id, {
      duration: 2000,
    });
    this.router.navigate(['/books']);
  }

  private parseBookData(book) {
    let booksData: IBook;
    booksData.id = book[0].id;
    booksData.author = book[0].volumeInfo.authors;
    booksData.bookTitle = book[0].volumeInfo.title;
    booksData.description = book[0].volumeInfo.description;
    booksData.starRating = book[0].volumeInfo.averageRating;
    booksData.cover = book[0].volumeInfo.imageLinks === undefined ? '' : book[0].volumeInfo.imageLinks.thumbnail;
    booksData.isbn = book[0].volumeInfo.industryIdentifiers;
    booksData.genre = book[0].volumeInfo.categories;
    booksData.renewDateTime = '';
    booksData.userId = '';
    booksData.userName = '';
    booksData.issuedDateTime = '';
    booksData.location = '';
  }
}
