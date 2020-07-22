import { Component, OnInit } from '@angular/core';

declare var home: any;
declare var sidenav: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new home();
    new sidenav();
  }

}
