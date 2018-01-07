import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import { User } from './user.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: User;

  constructor(private storage: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  saveValue() {
    this.storage.store('username', this.user.username);
    this.storage.store('email', this.user.email);
    this.storage.store('password', this.user.password);
    this.storage.store('retyepassword', this.user.confirmPassword);
    console.log('saved successfully');
    this.router.navigateByUrl('/login');
  }
}
