import { Component, OnInit,ViewEncapsulation , Input} from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  
  styleUrls: ['./breadcrumbs.component.scss'],
  encapsulation: ViewEncapsulation.Native

})
export class BreadcrumbsComponent implements OnInit {
 @Input() links:any=[];
 @Input() title:string;
  constructor() { }

  ngOnInit() {


  }

}
