import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Book } from "./models/book";


@Injectable()
export class LibraryService {

  public books: Observable<Book[]>;
  //public apiHost: string = 'http://api.pfsa.morrisdev.com';
  public apiHost: string = 'http://localhost:53035'
  constructor(private http: Http) { }


  getBooks(title?:string,author?:string, prefix?:string): Observable<Book[]> {

    if(title===undefined) title='';
    if(author===undefined) author='';
    if(prefix===undefined) prefix='';


    let url=`${this.apiHost}/api/library/search?prefix=${prefix}&author=${author}&title=${title}`
    return this.http.get(url)
      .map(res => res.json());

    //  return this.books;
  }
  getBook(prefix: string, booknumber: string): Observable<Book> {
    let url = `/api/library/catalog/${prefix}/${booknumber}`;
    return this.http.get(this.apiHost + url)
      .map(res => res.json());

  }
  getBookHistory(prefix: string, booknumber: number): Observable<any> {
    //http://api.pfsa.morrisdev.com/library/catalog/GA/1855/history
    let url = `/library/catalog/${prefix}/${booknumber}/history`;
    return this.http.get(this.apiHost + url)
      .map(res => res.json());
  }
}
