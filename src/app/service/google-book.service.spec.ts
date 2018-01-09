import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { GoogleBookService } from './google-book.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { IBook } from './IBook';


describe('GoogleBookService', () => {
  let service: GoogleBookService = null;
  let backend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [ MockBackend, BaseRequestOptions ]
        },
        GoogleBookService]
    });
  });

  beforeEach(inject([GoogleBookService, MockBackend], (googleBooksService: GoogleBookService, mockBackend: MockBackend) => {
    service = googleBooksService;
    backend = mockBackend;
  }));

  const data = {
    'bookTitle': 'The Android Developer cookbook',
    'author': 'Bill Philips & Brian Hardy',
    'isbn': '9789332523876'
  };

  const books = {id: 'mrm8hxiJ4XIC',
      volumeInfo: {title: 'Pathology and Genetics of Head and Neck Tumours'}
  };

  const queryTitle = 'Pathology and Genetics of Head and Neck Tumours';
  const isbn = '9283224175';

  it('should retrieve the book from the volumeId', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({
        body: JSON.stringify(data)
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual(`https://www.googleapis.com/books/v1/volumes/${queryTitle}`);
    });
    service
      .retrieveBook(queryTitle)
      .subscribe((response) => {
        console.log('retrieveBook', response);
        expect(response).toEqual(data);
        done();
      });
  });

});
