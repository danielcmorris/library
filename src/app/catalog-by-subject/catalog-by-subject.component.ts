import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Subject } from '../models/subject';

@Component({
  selector: 'app-catalog-by-subject',
  templateUrl: './catalog-by-subject.component.html',
  styleUrls: ['./catalog-by-subject.component.scss']
})
export class CatalogBySubjectComponent implements OnInit {
  public author: any;
  public subject: string;
  public subjects: Subject[];
  public book: any;
  public books: any = [];
  public searchText: string;
  public title: string = 'Catalog by Subject';
  public myForm: FormGroup; // our model driven form


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Lib: LibraryService,
    private _fb: FormBuilder) { }


  ngOnInit() {

    console.log("init page")
    this.searchText = ""
    this.myForm = new FormGroup(
      {
        searchBox: new FormControl('', [<any>Validators.required]),
      });





    // IF ROUTE PARAMETERS CHANGE BUT COMPONENT REMAINS THE SAME, ngInit will not be called again, but this param subscription WILL.
    let params = this.route.params.subscribe(params => {
       this.searchText=''

       let sb =this.myForm.controls.searchBox
       
      sb.reset()
      console.log(sb.value)
      this.subject = params['subject'];
      this.Lib.getSubjects().subscribe(data => {
         
        let s=new Subject();
        console.log(s)
        s.Prefix = '123' 
         let mySubject:Array<Subject> =[];
         mySubject.push(s);
          mySubject = data.filter((v: Subject) => { return v['Prefix'] == this.subject });
        console.log(mySubject);

        if (mySubject.length > 0) {
          console.log(mySubject[0].Prefix)
          this.title = mySubject[0].Name;
        }

      })
      this.Lib.getBooks('', '', this.subject).subscribe(data => { this.books = data },
        err => {
          console.log("ERROR GETTING DATA!");
        });

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
     this.Lib.getBooks(searchText, '', this.subject).subscribe(data => { 
       this.books = data 
       
       this.searchText = 'Found ' + this.books.length + ' searching for titles containing "' + searchText + '"';
    },
        err => {
          console.log("ERROR GETTING DATA!");
        });

    
  }
}
