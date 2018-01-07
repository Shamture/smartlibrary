import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class UserService {
  private isUserLoggedIn: boolean;
  public username: string;

  constructor() {
    this.isUserLoggedIn = false;
    this.username = null;
  }

  setUserLoggedIn(status: boolean, user: string) {
    this.isUserLoggedIn = status;
    this.username = user;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  getUserName() {
    return this.username;
  }
}
