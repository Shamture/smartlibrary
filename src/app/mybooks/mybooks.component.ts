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
export class MybooksComponent implements OnInit {
  bookList = null;
  dataSource = new MatTableDataSource<IBook>(this.bookList);
  displayedColumns = ['id', 'bookTitle', 'cover', 'isbn', 'author', 'return', 'issuedDateTime', 'renewDateTime'];
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    if (filterValue.length === 0) {
      this.dataSource.filter = this.user.getUserName();
    } else {
      this.dataSource.filter = filterValue;
    }
  }

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

  returned(books): void {
    this.snackBar.open('Returned succesfully', 'Issue', {
      duration: 2000,
    });
    this.router.navigate(['/book', books.id]);
  }
}
