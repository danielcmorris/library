import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {
  public sub: any;
  public subject: any;
  public book: any;
  public books: any = [];
  public searchText: string;
  public showWaiter: boolean =true;
  public myForm: FormGroup; // our model driven form


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Lib: LibraryService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.subject = params['subject']; // (+) converts string 'id' to a number

    });
    this.searchText = "Recent Additions"
    this.myForm = new FormGroup(
      {
        searchBox: new FormControl('', [<any>Validators.required]),
      });

    this.Lib.getBooks().subscribe(data => { this.books = data;      this.showWaiter = false; },
      err => {
        console.log("ERROR GETTING DATA!");
      });

  }
  Search(form: any, isValid: boolean) {
    //console.log(form);
    //console.log(isValid);
    if (isValid) {
      this.searchText = 'Searching for "' + form.searchBox + '"';
      this.GetData(form.searchBox);
    }
  }
  GetData(searchText: string) {
    this.Lib.getBooks(searchText).subscribe(data => {
    this.books = data;
      this.searchText = 'Found ' + this.books.length + ' searching for titles containing "' + searchText + '"';
      this.showWaiter = false;
    },
      err => {
        console.log("ERROR GETTING DATA!");
      });
  }
} 