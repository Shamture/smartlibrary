import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import { Login } from './login.interface';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: Login;

  constructor(private storage: LocalStorageService,
    private router: Router,
    public snackBar: MatSnackBar,
    private user: UserService) { }

  ngOnInit() {
    this.login = {
      username: '',
      password: '',
    };
  }

  verfiyLogin() {
    if ((this.login.username === 'admin') && (this.login.password === 'admin') ) {
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
