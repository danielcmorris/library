import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Book} from "../models/book";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  sub:any;
  callnumber:string
  book:Book=new Book();
  constructor(   private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       this.callnumber = params['callnumber'];  
 
    });
    
  }

}
