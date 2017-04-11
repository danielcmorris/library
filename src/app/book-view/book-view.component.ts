import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Book } from "../models/book";
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  providers: []
})
export class BookViewComponent implements OnInit {
  sub: any;
  callnumber: string
  book: Book = new Book();
  constructor(
    private route: ActivatedRoute, private router: Router,
    private LibraryService: LibraryService) { }

  ngOnInit() {
    let prefix = '';
    let booknumber;

    this.sub = this.route.params.subscribe(params => {
      booknumber = params['booknumber'];
      prefix = params['prefix'];
      this.callnumber = prefix + booknumber.toString();
      this.book.Title = "Loading..."
      this.book.Prefix = prefix
      this.book.BookNumber = booknumber;
      this.book.Url = '';
      this.LoadBook(prefix, booknumber);
    });

  }

  getUrl(path: string) {
    path = 'https://d2rg9t5epa49og.cloudfront.net/' + path;
    return path;
  }
  LoadBook(p, bn) {
    this.LibraryService.getBook(p, bn).subscribe(data => { this.book = data;
      //total hack I was working with while developing
    this.book.Notes = this.book.Notes.replace('https://www.archive.org/stream/episdiosdram01baiuoft?ref=ol#page/n9/mode/2up',
    '<a href="https://www.archive.org/stream/episdiosdram01baiuoft?ref=ol#page/n9/mode/2up" target="_blank">https://www.archive.org/stream/episdiosdram01baiuoft?ref=ol#page/n9/mode/2up</a>');
   })
  }
}
