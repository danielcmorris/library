import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-line',
  templateUrl: './book-line.component.html',
  styleUrls: ['./book-line.component.scss']
})
export class BookLineComponent implements OnInit {
 @Input() book:any;
  constructor() { }

  ngOnInit() {
  }

}
