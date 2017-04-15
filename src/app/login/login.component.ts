import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Login(){
    let u:any = new Object();
    u.UserName='TESTER'
    sessionStorage.setItem("user",JSON.stringify(u));
    
      this.router.navigate(['home']);
  }

}
