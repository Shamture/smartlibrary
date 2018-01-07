import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookListComponent } from './book-list/book-list.component';
import { AuthService } from './service/auth.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookGuardService } from './service/book-guard.service';
import { MybooksComponent } from './mybooks/mybooks.component';

export const ROUTES: Routes = [
    { path: '', canActivate: [AuthService], component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'books', component: BookListComponent },
    { path: 'mybooks', component: MybooksComponent },
    { path: 'book/:id', canActivate: [BookGuardService], component: BookDetailComponent},
    { path: '**', component: NotfoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
