import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IBook } from '../service/IBook';
import { Subscription } from 'rxjs/Subscription';
import { BookService } from '../service/book.service';
import { UserService } from '../service/user.service';
import { RatingModule, Rating } from 'ngx-rating';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

/**
 * Book details
 */
export class BookDetailComponent implements OnInit, OnDestroy {
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

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: BookService,
    private user: UserService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.getBook(id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Get Books
   * @param id
   */
  getBook(id: string) {
    this.service.getBook(id).subscribe(
      book => this.book = book,
      error => this.errorMessage = <any>error);
  }

}
