import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserService } from './user.service';
import {Router} from '@angular/router';
import { NavigationExtras } from '@angular/router';

describe('AuthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService,
        UserService,
        {provide: Router, useClass: FakeRouter}]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});

export class FakeRouter {
  lastCommand: any[];
  navigate(commands: any[], extras?: NavigationExtras) {
    this.lastCommand = commands;
    return commands;
  }
}
