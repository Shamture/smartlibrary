import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../service/google-book.service';
import { IBook } from '../service/IBook';
import { BookService } from '../service/book.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
/**
 * Book Edit
 */
export class BookEditComponent implements OnInit {

  private sub: Subscription;
  errorMessage: string;
  book: IBook;

  constructor(private googlebook: GoogleBookService, private service: BookService,
    private route: ActivatedRoute,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('book edit ngOnInit');
    this.sub = this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.getBook(id);
      }
    );
  }

  /**
   * Get Books
   * @param id
   */
  getBook(id: string): void {
    this.service.getBook(id)
      .subscribe(
      book => this.book = book,
      (error: any) => this.errorMessage = <any>error);
  }

  /**
   * Save Book
   * @param book
   */
  saveBook(book): void {
    console.log('author', this.book.author);
    this.service.saveBook(book)
      .subscribe(
      () => this.onSaved(),
      (error: any) => this.errorMessage = <any>error
      );
  }

  /**
   * Called on saved
   */
  onSaved(): void {
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
}
