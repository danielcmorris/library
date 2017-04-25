import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  //FirstName = new FormControl();

  constructor(private router: Router, private fb: FormBuilder) {

    this.profileForm = fb.group({

      FirstName: ['test'],
      LastName: ['test'],
      Phone: ['test'],
      Email: ['test'],
      address: this.fb.group({
        StreetAddress1: ['test'],
        StreetAddress2: ['test'],
        City: ['test'],
        State: ['test'],
        PostalCode: ['test'],
        Country: ['test']
      })


    })
  }
  save() { }
  ngOnInit() {
    console.log(this.profileForm)
  }

}
