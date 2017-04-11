import { Component, OnInit , Input} from '@angular/core';
import {LibraryService} from '../library.service';
import {BookHistory} from '../models/book-history';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  @Input() prefix:string;
  @Input() booknumber:number;
  history :BookHistory[];
  constructor(private LibraryService:LibraryService) { }

  ngOnInit() {
    this.LibraryService.getBookHistory(this.prefix, this.booknumber)
      .subscribe(data=>{
        console.log(data);
        this.history = data;} )
  }


sqlToJsDate(d){
    //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
var sqlDate =d.split("T")[0]
    var sqlDateArr1 = sqlDate.split("-");
    //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
    var sYear = sqlDateArr1[0];
    var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
    var sqlDateArr2 = sqlDateArr1[2].split(" ");
    //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
    var sDay = sqlDateArr2[0];

 
    
    return sMonth + '/' + sDay + '/' + sYear;
}
}
