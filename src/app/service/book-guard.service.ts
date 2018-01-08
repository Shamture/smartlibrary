import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';

@Injectable()
export class BookGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = route.url[1].path;
    console.log('book-guard', id);
    // if (isNaN(id) || id < 1) {
    //     alert('Invalid book Id');
    //     // start a new navigation to redirect to list page
    //     this.router.navigate(['/books']);
    //     // abort current navigation
    //     return false;
    // }
    return true;
}

}
