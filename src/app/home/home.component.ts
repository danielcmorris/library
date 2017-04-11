import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  book: any;
  books:any =[];


  constructor() { }

  ngOnInit() {
    this.book = {};
    let b = this.book
    b.callnumber = 123;
    b.title = 'Chasing the Dream';
    b.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad...";
    b.author = "By Melo, JC d"


    this.books.push(b);
    this.books.push(b);
    this.books.push(b);
    this.books.push(b);
    this.books.push(b);
    this.books.push(b);
    this.books.push(b);
    this.books.push(b);
    this.books.push(b);
    this.books.push(b);
    

  }

}
