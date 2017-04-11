import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

interface IBook {
  CallNumber: string;
  Title: string;
}

@Injectable()
export class LibraryServiceService {

  public books: Observable<IBook>;
  public apiHost: string = 'http://api.pfsa.morrisdev.com';

  constructor(private http: Http) { }


  getBooks(): Observable<IBook> {

 return  this.http.get(this.apiHost + '/api/library/search')
      .map(res => res.json());

  //  return this.books;
  }

  
}
