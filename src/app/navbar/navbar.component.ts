import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageTitle = 'Smart Library';
  isAdmin: boolean;
  isLoggedIn: boolean;

  constructor(private user: UserService, private storage: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.isAdmin = this.storage.retrieve('isAdmin');
    this.isLoggedIn = this.storage.retrieve('isLoggedIn');
    console.log('isadmin', this.isAdmin);
    console.log('isLoggedIn', this.isLoggedIn);
  }

  logout() {
    if (this.isAdmin) {
      this.storage.clear('isAdmin');
      this.storage.store('isAdmin', false);
      this.user.setUserLoggedIn(false, 'null');
    }

    if (this.isLoggedIn) {
      this.storage.clear('isLoggedIn');
      this.user.setUserLoggedIn(false, null);
      this.storage.store('isLoggedIn', false);
    }
    this.router.navigate(['/home']);
  }
}
