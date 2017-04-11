import { Component, OnInit, Input } from '@angular/core';
import {MdButton, MdCard} from '@angular/material';

@Component({
  selector: 'app-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.scss'],
  providers: [MdButton,MdCard]  
})
export class BookTileComponent implements OnInit {
  @Input() callnumber: string;
  @Input() book:any;
  constructor(private _button: MdButton, private _card: MdCard) { }

  ngOnInit() {
    console.log(this.book);
  }

}
