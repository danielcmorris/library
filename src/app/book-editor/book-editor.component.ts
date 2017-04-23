import { Component, OnInit } from '@angular/core';
import { Subject } from '../models/subject';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Settings } from '../app.settings';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';
import { LibraryService } from '../library.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {
  Subjects: Subject[];
  public apiHost: string = this.Settings.ApiEndpoint;
  private apiEndPoint: string = this.Settings.ApiEndpoint + 'api/image'
  private imageEndpoint: string = this.Settings.ImageServerEndpoint
  public book: Book = new Book();

  public bookForm: FormGroup;
  public PageTitle: string = "New Catalog Addition"
  public CardTitle: string = 'Add a new title to the catalog';
  constructor(private http: Http, private Settings: Settings,
    private fb: FormBuilder, private ls: LibraryService,
    private route: ActivatedRoute, private router: Router, ) {


    this.bookForm = fb.group({
      BookId: 0,
      CallNumber: '',
      BookNumber: '',
      CreateBy: "CurrentUser",
      CreateDate: new Date,
      ModifiedBy: 'CurrentUser',
      ModifiedDate: new Date(),
      Notes: '',
      Prefix: '',
      Status: 'Active',
      Subject: '',
      SubjectId: ['', Validators.required],
      Title: ['', Validators.required],
      Author: ['', Validators.required],
      Url: ''
    })

  }

  ngOnInit() {

    // this.book.Url = this.imageEndpoint + 'assets/book.png';
    // this.book.BookNumber =1723 
    // this.book.Prefix = 'E'

    this.route.params.subscribe(params => {
      let b = this.book;
      b.BookNumber = params['booknumber'];
      b.Prefix = params['prefix'];
      b.CallNumber = params['prefix'] + params['booknumber'];
      if (b.Prefix && b.BookNumber) {
        this.LoadBook(params['prefix'], params['booknumber']);
      }
    });


    let s = sessionStorage.getItem('Subjects')
    if (s) { this.Subjects = <Subject[]>JSON.parse(s); }
  }

  LoadBook(Prefix: string, BookNumber: string) {
    // this.bookForm.get('Author').patchValue('123')
    this.ls.getBook(Prefix, BookNumber)
      .subscribe((data: any) => {

        this.book = data;
        let f = this.bookForm
        let b = this.book;
        b.Url = this.imageEndpoint + b.Url;

        f.patchValue({ Title: b.Title })
        f.patchValue({ SubjectId: b.SubjectId })
        f.patchValue({ Author: b.Author })
        f.patchValue({ CallNumber: b.CallNumber })
        f.patchValue({ Prefix: b.Prefix })
        f.patchValue({ Notes: b.Notes })

      })

    this.bookForm.patchValue(
      {}
    )
  }

  save() {
    console.log(this.bookForm.valid)

    let b = this.book;
    b.Title = this.bookForm.get('Title').value;

    this.CardTitle = this.book.Title;
    this.PageTitle = this.book.Title;
  }
  clearImage() {

    this.book.Url = this.imageEndpoint + 'assets/book.png';
  }


  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      formData.append('callnumber', this.book.CallNumber);

      let headers = new Headers();

      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');


      //let options = new RequestOptions();


      this.http.post(`${this.apiEndPoint}`, formData, headers)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
        data => {
          console.log('success');
          console.log(data);
          this.book.Url = this.Settings.ImageServerEndpoint + data;

        },
        error => console.log(error)
        )
    }
  }

}
