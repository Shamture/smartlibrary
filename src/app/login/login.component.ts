import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Login } from './login.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../service/user.service';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * Login component
 */
export class LoginComponent implements OnInit {
  public login: Login;
  socialUser: SocialUser;

  constructor(private storage: LocalStorageService,
    private router: Router,
    public snackBar: MatSnackBar,
    private user: UserService,
    private auth: AuthService) { }

  ngOnInit() {
    this.login = {
      username: '',
      password: '',
    };
    this.auth.authState.subscribe((user) => {
      this.socialUser = user;
      if (this.socialUser != null) {
        this.user.setUserLoggedIn(true, this.socialUser.name);
        this.router.navigateByUrl('/books');
      }
    });
  }

  /**
   * Facebook login
   */
  signInWithFB(): void {
    console.log('Facebook login');
    this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  /**
   * Google login
   */
  signInWithGoogle(): void {
    console.log('Google login');
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  /**
   * Verify login
   */
  verfiyLogin() {
    if ((this.login.username === 'admin') && (this.login.password === 'admin')) {
      console.log('Admin loggedin');
      this.storage.store('isAdmin', true);
      this.storage.store('isLoggedIn', true);
      this.user.setUserLoggedIn(true, 'admin');
      this.router.navigateByUrl('/books');
    } else if (this.login.username === this.storage.retrieve('username') &&
      (this.login.password === this.storage.retrieve('password'))) {
      this.router.navigateByUrl('/books');
      this.storage.store('isAdmin', false);
      this.storage.store('isLoggedIn', true);
      this.user.setUserLoggedIn(true, this.login.username);
    } else {
      console.log('login failed');
      this.snackBar.open('Login failed !!!', 'Try again', {
        duration: 2000,
      });
    }
  }

}
