import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {LibraryService} from '../library.service';

@Component({
  selector: 'app-catalog-by-author',
  templateUrl: './catalog-by-author.component.html',
  styleUrls: ['./catalog-by-author.component.scss']
})
export class CatalogByAuthorComponent implements OnInit {
  public author: any;
  public subject: any;
  public book: any;
  public books: any=[];
  public searchText:string;

  public myForm: FormGroup; // our model driven form


  constructor(
    private route: ActivatedRoute,
    private router: Router,     
    private Lib: LibraryService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    let params = this.route.params.subscribe(params => {
      this.author = params['author']; 
      console.log(this.author);  
    });
    this.searchText = ""
    this.myForm = new FormGroup(
    {
        searchBox: new FormControl('', [<any>Validators.required]),         
    });
 
    this.Lib.getBooks('',this.author).subscribe(data => {this.books=data },
      err => {
        console.log("ERROR GETTING DATA!");
      });


  }   
  Search(form:any,isValid:boolean){
    //console.log(form);
    //console.log(isValid);
    if(isValid){
    this.searchText = 'Searching for "'+form.searchBox+'"';
    this.GetData(form.searchBox);
    }
  }
  GetData(searchText:string){
     this.Lib.getBooks(searchText, this.author).subscribe(data => {
       this.books=data ;
     this.searchText = 'Found '+ this.books.length + ' searching for titles containing "'+ searchText+'"';},
      err => {
        console.log("ERROR GETTING DATA!");
      });
  }
} 