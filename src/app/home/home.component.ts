import { Component, OnInit } from '@angular/core';
import {LibraryServiceService} from '../library-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  book: any;
  books:any =[];


  constructor(private lib:LibraryServiceService ) { }

  ngOnInit() {
     
    this.lib.getBooks().subscribe(data => {this.books=data },
      err => {
        console.log("ERROR GETTING DATA!");
      });

 
    

  }

}
