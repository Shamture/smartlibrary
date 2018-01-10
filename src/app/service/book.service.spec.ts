import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [BookService]
    });
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
