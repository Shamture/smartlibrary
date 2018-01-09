import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';
import { IBook } from '../service/IBook';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

/**
 * Book List
 */
export class BookListComponent implements OnInit {
  bookList = null;
  dataSource = new MatTableDataSource<IBook>(this.bookList);
  displayedColumns = ['id', 'bookTitle', 'cover', 'isbn', 'author', 'issued', 'edit'];
  errorMessage: string;
  isLoggedIn: boolean;
  isAdmin = false;

  books: IBook[];

  constructor(private service: BookService, private router: Router, private user: UserService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.service.getBooks()
      .subscribe(books => {
        this.bookList = books;
        this.dataSource.data = this.bookList;
      }
      );
    this.isLoggedIn = this.user.getUserLoggedIn();
    console.log('this.user.getUserName() >>>>', this.user.getUserName());
    if (this.isLoggedIn && this.user.getUserName() === 'admin') {
      this.isAdmin = true;
    }
    console.log('books >>>>', this.books);
  }

  /**
   * Search Filter
   * @param filterValue
   */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /**
   * Issue Books
   * @param books
   */
  issueBook(books) {
    books.userName = this.user.getUserName();
    const now = new Date();
    books.issuedDateTime = now;
    books.issued = true;
    books.renewDateTime = this.nextRenewalDate(now, 15);
    this.service.updateBook(books)
      .subscribe(() => this.issued(books),
      (error: any) => this.errorMessage = <any>error
      );
  }

  /**
   * Edit Book
   * @param books
   */
  editBook(books) {
    this.router.navigate(['/bookEdit', books.id]);
  }

  /**
   * Called on book issued
   * @param books
   */
  issued(books): void {
    this.snackBar.open('Issued succesfully', 'Return', {
      duration: 2000,
    });
  }

  /**
   * Renewal date
   * @param theDate
   * @param days
   */
  nextRenewalDate(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }

}

