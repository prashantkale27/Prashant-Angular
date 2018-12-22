import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  src="../../assets/Desert.jpg";
  height = 100; 
  width = 100;
  
  fname = "Prashant";
  lname = "Kale"

  zoomin()
  {
    this.height = 500;
    this.width = 500;
  }
   
  zoomout()
  {
    this.height = 100; 
    this.width = 100;
  }

  constructor() { }

  ngOnInit() {
  }

}
