import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {LibraryServiceService} from '../library-service.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {
  public sub: any;
  public subject: any;
  public book: any;
  public books: any=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http, 
    private Lib: LibraryServiceService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.subject = params['subject']; // (+) converts string 'id' to a number
      this.book = {};
      this.book.callnumber = '123';

      // In a real app: dispatch action to load the details here.
    });
  //this.books = data;
    this.Lib.getBooks().subscribe(data => {this.books=data },
      err => {
        console.log("ERROR GETTING DATA!");
      });

  }
  Search(){
    console.log( this.books);
  
  }
} 