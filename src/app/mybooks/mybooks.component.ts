import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';
import { IBook } from '../service/IBook';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
/**
 * MyBook component
 */
export class MybooksComponent implements OnInit {
  bookList = null;
  dataSource = new MatTableDataSource<IBook>(this.bookList);
  displayedColumns = ['id', 'bookTitle', 'cover', 'isbn', 'author', 'return', 'renew', 'issuedDateTime', 'renewDateTime'];
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
        this.dataSource.filter = this.user.getUserName();
      }
      );

    this.isLoggedIn = this.user.getUserLoggedIn();
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
    if (filterValue.length === 0) {
      this.dataSource.filter = this.user.getUserName();
    } else {
      this.dataSource.filter = filterValue;
    }
  }

  /**
   * Return Books
   * @param books
   */
  returnBook(books) {
    books.userName = '';
    const now = new Date();
    books.issuedDateTime = '';
    books.issued = false;
    books.renewDateTime = '';
    this.service.updateBook(books)
      .subscribe(() => this.returned(books),
      (error: any) => this.errorMessage = <any>error
      );
  }

  /**
   * Renew Books
   * @param books
   * @param renewDateTime
   */
  renewBook(books, renewDateTime) {
    books.userName = this.user.getUserName();
    const now = new Date();
    books.issued = true;
    console.log('renewDateTime', renewDateTime);
    books.renewDateTime = this.nextRenewalDate(new Date(renewDateTime), 15);
    this.service.updateBook(books)
      .subscribe(() => this.renewed(books),
      (error: any) => this.errorMessage = <any>error
      );
  }

  /**
   * Called on renewed
   * @param books
   */
  renewed(books): void {
    this.snackBar.open('Renewed succesfully', 'Return', {
      duration: 2000,
    });
  }

  /**
   * Renewal Date
   * @param theDate
   * @param days
   */
  nextRenewalDate(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }

  /**
   * Called on returned
   * @param books
   */
  returned(books): void {
    this.snackBar.open('Returned succesfully', 'Issue', {
      duration: 2000,
    });
    this.router.navigate(['/book', books.id]);
  }
}
