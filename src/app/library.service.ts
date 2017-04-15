import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { Book } from "./models/book";
import { Settings } from './app.settings';
import { Subject } from './models/subject';


@Injectable()
export class LibraryService {

  public books: Observable<Book[]>;

  public apiHost: string = this.Settings.ApiEndpoint;
  constructor(private http: Http, private Settings: Settings) { }


  getBooks(title?: string, author?: string, prefix?: string): Observable<Book[]> {
    if (title === undefined) title = '';
    if (author === undefined) author = '';
    if (prefix === undefined) prefix = '';
console.log("GETTING BOOKS")

    let url = `${this.apiHost}/api/library/search?prefix=${prefix}&author=${author}&title=${title}`
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



  getSubjects(): Observable<Subject[]> {
   
    let SubjectsString = sessionStorage.getItem("Subjects")

    if (SubjectsString) {
      let subjects: Subject[] = JSON.parse(SubjectsString);
      console.log("GETTING DATA FROM SESSION STORAGE")
      subjects = subjects.filter((val) =>{
        return val['Prefix']
      })
      return Observable.of(subjects);
      
    } else {
      let url = `${this.apiHost}/api/subject`;
      return this.http.get(url)
        .map(res =>{          
          sessionStorage.setItem("Subjects",JSON.stringify(res.json()));           
          return res.json();
        })
      
      
    }

       
  }
}
