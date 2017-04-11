import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  book: any;
  books:any =[];


  constructor(private lib:LibraryService ) { }

  ngOnInit() {
     
    this.lib.getBooks().subscribe(data => {this.books=data },
      err => {
        console.log("ERROR GETTING DATA!");
      });

 
    

  }

}
