import { Injectable } from '@angular/core';
import { Book } from './book';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  booksRef: AngularFireList<any>;
  bookRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  /* Create book */
  AddBook(book: Book) {
    this.booksRef.push({
    name: book.name,
    email: book.email,
    telephone: book.telephone,
    country: book.country,
    guest_no: book.guest_no,
    arrival: book.arrival,
    departure: book.departure,
    destination: book.destination,
    message: book.message
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Get book */
  GetBook(id: string) {
    this.bookRef = this.db.object('books-list/' + id);
    return this.bookRef;
  }  

  /* Get book list */
  GetBookList() {
    this.booksRef = this.db.list('books-list');
    return this.booksRef;
  }

  /* Update book */
  UpdateBook(id, book: Book) {
    this.bookRef.update({
    name: book.name,
    email: book.email,
    telephone: book.telephone,
    country: book.country,
    guest_no: book.guest_no,
    arrival: book.arrival,
    departure: book.departure,
    destination: book.destination,
    message: book.message
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Delete book */
  DeleteBook(id: string) {
    this.bookRef = this.db.object('books-list/' + id);
    this.bookRef.remove()
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}
