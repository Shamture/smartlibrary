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

  const data: IBook = {
    'id': 't5rgAAAAMAAJ',
    'bookTitle': 'The Android Developer cookbook',
    'cover': 'assets/images/book1.jpeg',
    'isbn': '9789332523876',
    'author': 'Bill Philips & Brian Hardy',
    'issued': false,
    // tslint:disable-next-line:max-line-length
    'description': 'The complete Learning Series has been designed in a very systematic and logical manner. Each topic has been developed from the basic concepts. Practically every major point in the text is illustrated with suitable examples and sceen shots. This will help the students in understanding the basic theory and train them in solving every problem systematically, and confidently. A large number of unsolved as well as solved exercises have also been included in the book. The language of the text of the book is lucid, direct and easy-to understand. Each chapter is laced with various diagrams wherever possible. Functions has been explained in full and some of them have been explained in the form of examples. Tips for working faster using the keyboard shortcuts are also provided.',
    'starRating': 3,
    'qrcode': null,
    'renewDateTime': '',
    'userName': '',
    'issuedDateTime': '',
    'userId': '',
    'genre': 'programming',
    'location': 'A-1'
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

  it('should search the book from the isbn', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({
        body: JSON.stringify(data)
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    });
    service
      .searchBooks(isbn)
      .subscribe((response) => {
        console.log('searchBooks', response);
        expect(response).toEqual([]);
        done();
      });
  });

});
