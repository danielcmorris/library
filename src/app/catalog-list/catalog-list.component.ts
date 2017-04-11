import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {
  public sub: any;
  public subject: any;
  public book: any;
  public books: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.subject = params['subject']; // (+) converts string 'id' to a number
      this.book = {};
      this.book.callnumber = '123';

      // In a real app: dispatch action to load the details here.
    });



    this.http.get('http://api.pfsa.morrisdev.com/api/library/search').map(res => res.json()).subscribe(data => {
      this.books = data;
      console.log(data)
    },
      err => {
        console.log("Oops!");
      });
  }


} 