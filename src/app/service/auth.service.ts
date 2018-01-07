import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Router} from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private user: UserService, private router: Router) {}

  canActivate(): boolean {
    if (!this.user.getUserLoggedIn()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }

}
