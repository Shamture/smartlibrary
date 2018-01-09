import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { MockBackend } from '@angular/http/testing';

describe('UserService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('#getUserLoggedIn should return false after creation', inject([UserService], (service: UserService) => {
    expect(service.getUserLoggedIn()).toBeFalsy();
  }));

  it('#setUserLoggedIn should return admin after creation', inject([UserService], (service: UserService) => {
    service.setUserLoggedIn(true, 'admin');
    expect(service.getUserName()).toBe('admin');
  }));

  it('#setUserLoggedIn should return true after creation', inject([UserService], (service: UserService) => {
    service.setUserLoggedIn(true, 'admin');
    expect(service.getUserLoggedIn()).toBeTruthy();
  }));

});
