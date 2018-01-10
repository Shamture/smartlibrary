import { TestBed, inject } from '@angular/core/testing';

import { BookGuardService } from './book-guard.service';
import {Router} from '@angular/router';
import { NavigationExtras } from '@angular/router';


describe('BookGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookGuardService,
        {provide: Router, useClass: FakeRouter}]
    });
  });

  it('should be created', inject([BookGuardService], (service: BookGuardService) => {
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
