import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { Ng2Webstorage } from 'ngx-webstorage';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { FooterComponent } from './footer/footer.component';
import { BookService } from './service/book.service';
import { BookData } from './data/book-data';
import { BookGuardService } from './service/book-guard.service';
import { RatingModule } from 'ngx-rating';
import { MybooksComponent } from './mybooks/mybooks.component';
import { GoogleBookService } from './service/google-book.service';
import { BookAddComponent } from './book-add/book-add.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BookListComponent,
    BookEditComponent,
    BookDetailComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    FooterComponent,
    MybooksComponent,
    BookAddComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule,
    FormsModule,
    Ng2Webstorage,
    HttpClientModule,
    RatingModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    LazyLoadImagesModule,
    HttpClientInMemoryWebApiModule.forRoot(BookData),
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [UserService, AuthService, BookService, BookGuardService, GoogleBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
