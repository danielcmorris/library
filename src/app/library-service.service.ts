import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Book } from "./models/book";
 

@Injectable()
export class LibraryServiceService {

  public books: Observable<Book[]>;
  public apiHost: string = 'http://api.pfsa.morrisdev.com';

  constructor(private http: Http) { }


  getBooks(): Observable<Book[]> {

    return this.http.get(this.apiHost + '/api/library/search')
      .map(res => res.json());

    //  return this.books;
  }
  getBook(prefix:string,booknumber:string): Observable<Book> {
    let url = `/api/library/catalog/${prefix}/${booknumber}`; 
    return this.http.get(this.apiHost + url)
      .map(res => res.json());

  }

}
