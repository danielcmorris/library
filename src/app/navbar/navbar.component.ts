import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Subject } from '../models/subject';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  public loggedin: any = false;
  public subjects: any = [Subject]
  public callNumber: string;
  public User: any = {};
  constructor(private LibraryService: LibraryService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event['url']) {
        // console.log(event['url']);

        if (sessionStorage.getItem("user")) {
          this.User = JSON.parse(sessionStorage.getItem("user"))
          this.loggedin = true;

        } else {
          //  this.User = null;
          this.loggedin = false;
        }


      }
    });
    this.LibraryService.getSubjects().subscribe(data => {

      let s: Subject[] = data;

      this.subjects = s.filter((row) => row['Prefix'] != null)
    },
      err => {
        console.log("ERROR GETTING SUBJECT LIST!");
      });
  }

LogOut(){

  sessionStorage.removeItem("user")
 this.router.navigate(['home']);
}

  getVisibleRows() {
    return this.subjects.filter((row) => row.Prefix != null);
  }
  OpenTitle() {

    console.log(this.callNumber)
  }

}
