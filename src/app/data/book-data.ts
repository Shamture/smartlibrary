import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IBook } from '../service/IBook';

export class BookData implements InMemoryDbService {
    createDb() {
        const books: IBook[] = [
            {
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

            },
            {
                'id': 'i1lrYuczMUMC',
                'bookTitle': 'Android Application Development',
                'cover': 'assets/images/book2.jpeg',
                'isbn': '9789351194095',
                'author': 'Greg Nudelman',
                'issued': false,
                // tslint:disable-next-line:max-line-length
                'description': 'The complete Learning Series has been designed in a very systematic and logical manner. Each topic has been developed from the basic concepts. Practically every major point in the text is illustrated with suitable examples and sceen shots. This will help the students in understanding the basic theory and train them in solving every problem systematically, and confidently. A large number of unsolved as well as solved exercises have also been included in the book. The language of the text of the book is lucid, direct and easy-to understand. Each chapter is laced with various diagrams wherever possible. Functions has been explained in full and some of them have been explained in the form of examples. Tips for working faster using the keyboard shortcuts are also provided.',
                'starRating': 4,
                'qrcode': null,
                'renewDateTime': '',
                'userName': '',
                'issuedDateTime': '',
                'userId': '',
                'genre': 'programming',
                'location': 'A-2'
            },
            {
                'id': 'Z00uAQAAIAAJ',
                'bookTitle': 'Android App Development',
                'cover': 'assets/images/book3.jpeg',
                'isbn': '9788126557868',
                'author': 'Ian G. Clifton',
                'issued': false,
                // tslint:disable-next-line:max-line-length
                'description': 'The complete Learning Series has been designed in a very systematic and logical manner. Each topic has been developed from the basic concepts. Practically every major point in the text is illustrated with suitable examples and sceen shots. This will help the students in understanding the basic theory and train them in solving every problem systematically, and confidently. A large number of unsolved as well as solved exercises have also been included in the book. The language of the text of the book is lucid, direct and easy-to understand. Each chapter is laced with various diagrams wherever possible. Functions has been explained in full and some of them have been explained in the form of examples. Tips for working faster using the keyboard shortcuts are also provided.',
                'starRating': 3,
                'qrcode': null,
                'renewDateTime': '',
                'userName': '',
                'issuedDateTime': '',
                'userId': '',
                'genre': 'technology',
                'location': 'B-1'
            },
            {
                'id': 'CpEvv0Wlm48C',
                'bookTitle': 'Learning Android',
                'cover': 'assets/images/book4.jpeg',
                'isbn': '9788126557860',
                'author': 'Dave Smith & Jeff Friesen',
                'issued': false,
                // tslint:disable-next-line:max-line-length
                'description': 'The complete Learning Series has been designed in a very systematic and logical manner. Each topic has been developed from the basic concepts. Practically every major point in the text is illustrated with suitable examples and sceen shots. This will help the students in understanding the basic theory and train them in solving every problem systematically, and confidently. A large number of unsolved as well as solved exercises have also been included in the book. The language of the text of the book is lucid, direct and easy-to understand. Each chapter is laced with various diagrams wherever possible. Functions has been explained in full and some of them have been explained in the form of examples. Tips for working faster using the keyboard shortcuts are also provided.',
                'starRating': 2,
                'qrcode': null,
                'renewDateTime': '',
                'userName': '',
                'issuedDateTime': '',
                'userId': '',
                'genre': 'programming',
                'location': 'B-2'
            },
            {
                'id': 'yf8-FycABEoC',
                'bookTitle': 'Bulletproof Android',
                'cover': 'assets/images/book5.jpeg',
                'isbn': '9789332552326',
                'author': 'Ed Burnette',
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
                'location': 'C-1'
            },
            {
                'id': 'Vtq4BgAAQBAJ',
                'bookTitle': 'The Android Developer cookbook',
                'cover': 'assets/images/book1.jpeg',
                'isbn': '9789332523876',
                'author': 'Mario Zechner',
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

            },
            {
                'id': 'BEeoAwAAQBAJ',
                'bookTitle': 'Android Application Development',
                'cover': 'assets/images/book2.jpeg',
                'isbn': '9789351194095',
                'author': 'Zigurd Mednieks',
                'issued': false,
                // tslint:disable-next-line:max-line-length
                'description': 'The complete Learning Series has been designed in a very systematic and logical manner. Each topic has been developed from the basic concepts. Practically every major point in the text is illustrated with suitable examples and sceen shots. This will help the students in understanding the basic theory and train them in solving every problem systematically, and confidently. A large number of unsolved as well as solved exercises have also been included in the book. The language of the text of the book is lucid, direct and easy-to understand. Each chapter is laced with various diagrams wherever possible. Functions has been explained in full and some of them have been explained in the form of examples. Tips for working faster using the keyboard shortcuts are also provided.',
                'starRating': 4,
                'qrcode': null,
                'renewDateTime': '',
                'userName': '',
                'issuedDateTime': '',
                'userId': '',
                'genre': 'programming',
                'location': 'A-2'
            },
            {
                'id': '0AfxBQAAQBAJ',
                'bookTitle': 'Android App Development',
                'cover': 'assets/images/book3.jpeg',
                'isbn': '9788126557868',
                'author': 'Laird Dornin',
                'issued': false,
                // tslint:disable-next-line:max-line-length
                'description': 'The complete Learning Series has been designed in a very systematic and logical manner. Each topic has been developed from the basic concepts. Practically every major point in the text is illustrated with suitable examples and sceen shots. This will help the students in understanding the basic theory and train them in solving every problem systematically, and confidently. A large number of unsolved as well as solved exercises have also been included in the book. The language of the text of the book is lucid, direct and easy-to understand. Each chapter is laced with various diagrams wherever possible. Functions has been explained in full and some of them have been explained in the form of examples. Tips for working faster using the keyboard shortcuts are also provided.',
                'starRating': 3,
                'qrcode': null,
                'renewDateTime': '',
                'userName': '',
                'issuedDateTime': '',
                'userId': '',
                'genre': 'technology',
                'location': 'B-1'
            },
            {
                'id': '3l7_p6EuMYoC',
                'bookTitle': 'Learning Android',
                'cover': 'assets/images/book4.jpeg',
                'isbn': '9788126557860',
                'author': 'G. Blake Meike & Masumi Nakamura',
                'issued': false,
                // tslint:disable-next-line:max-line-length
                'description': 'The complete Learning Series has been designed in a very systematic and logical manner. Each topic has been developed from the basic concepts. Practically every major point in the text is illustrated with suitable examples and sceen shots. This will help the students in understanding the basic theory and train them in solving every problem systematically, and confidently. A large number of unsolved as well as solved exercises have also been included in the book. The language of the text of the book is lucid, direct and easy-to understand. Each chapter is laced with various diagrams wherever possible. Functions has been explained in full and some of them have been explained in the form of examples. Tips for working faster using the keyboard shortcuts are also provided.',
                'starRating': 2,
                'qrcode': null,
                'renewDateTime': '',
                'userName': '',
                'issuedDateTime': '',
                'userId': '',
                'genre': 'programming',
                'location': 'B-2'
            },
            {
                'id': 'yjx_AgAAQBAJ',
                'bookTitle': 'Bulletproof Android',
                'cover': 'assets/images/book5.jpeg',
                'isbn': '9789332552326',
                'author': 'Brian Hardy',
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
                'location': 'C-1'
            },

        ];
        return { books };
    }
}
