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
  public showWaiter: boolean = false;
  public showPrimary: boolean = true;
  public showImage: boolean = false;
  public showClearImage:boolean = false
  public bookForm: FormGroup;
  public PageTitle: string = "New Catalog Addition"
  public CardTitle: string = 'Add a new title to the catalog';
  public StatusMessage:string = "loading..."
public FileName:string ='';


  public fileList: FileList;

  constructor(private http: Http, private Settings: Settings,
    private fb: FormBuilder, private ls: LibraryService,
    private route: ActivatedRoute, private router: Router, ) {

      this.book.Url = this.imageEndpoint + 'assets/book.png';
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
   // this.showPrimary = false;
    this.showWaiter = true
    setTimeout(() => {
      this.showWaiter = false;
      this.showImage = true;
    }, 2000);
  }
  clearImage() {

    this.book.Url = this.imageEndpoint + 'assets/book.png';
  }

  resetFileUpload(){
    this.FileName='';
    this.fileList = null;
  }
  FileUpload() {
    if (this.fileList.length > 0) {
      let file: File = this.fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      formData.append('callnumber', this.book.CallNumber);
      this.FileName = file.name;
      let headers = new Headers();

      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');


      //let options = new RequestOptions();

      this.showWaiter = true;
      this.StatusMessage = "Loading Image";


      this.http.post(`${this.apiEndPoint}`, formData, headers)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
        data => {
          console.log('success');
          console.log(data);
          this.book.Url = this.Settings.ImageServerEndpoint + data;
          this.showImage=true;
          this.showWaiter=false;
        },
        error => console.log(error)
        )
    }
  }
  fileChange(event) {
    this.fileList = event.target.files;
    if (this.fileList.length > 0) {
      let file: File = this.fileList[0];
      
      this.FileName = file.name;
      }

  }

}
