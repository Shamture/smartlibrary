import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';
import { IBook } from '../service/IBook';
import { UserService } from '../service/user.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

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
    if (this.isLoggedIn && this.user.getUserName() === 'admin') {
      this.isAdmin = true;
    }
    console.log('books >>>>', this.books);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

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

  editBook(books) {
    this.router.navigate(['/bookEdit', books.id]);
  }

  issued(books): void {
    this.snackBar.open('Issued succesfully', 'Return', {
      duration: 2000,
    });
  }

  nextRenewalDate(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }

}

// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: 'The Android Developer cookbook', cover: 'assets/images/book1.jpeg', isbn: '9789332523876', symbol: 'H'},
//   {position: 2, name: 'Android Application Development', cover: 'assets/images/book2.jpeg', isbn: '9789351194095', symbol: 'He'},
//   {position: 3, name: 'Android App Development', cover: 'assets/images/book3.jpeg', isbn: '9788126557868', symbol: 'Li'},
//   {position: 4, name: 'Learning Android', cover: 'assets/images/book4.jpeg', isbn: '9788126557860', symbol: 'Li'},
//   {position: 5, name: 'Bulletproof Android', cover: 'assets/images/book5.jpeg', isbn: '9789332552326', symbol: 'Li'},
// ];
