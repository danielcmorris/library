import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../models/book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books:Book[]
  @Input() spinner:boolean = true;
  showWaiter:boolean = true;
  showFailure:boolean = true;
  private SearchInitiated:boolean = true;

  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges(){

    if(this.spinner){this.showWaiter=true;}else{this.showWaiter=false;}
    if(!this.showWaiter && this.books.length===0){
      this.showFailure=true;
    }
  }

}
