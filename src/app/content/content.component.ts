import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  index = 0 ;
   lunchMenuItems: string[] =["Veg Thali","mini Veg Thali","Non-Veg Thali","Paratha","EGG Thali","Rice Plate"]
   BreakfastMenuItems: string[] =["Idli","Vada","Poha","Dosa","Bread Omlet"]
    
   lunchmenuflag : boolean = true;
   myStyle:object;
    //Menuitems : string[] =[] ;
    myCurrentClass : string;
  
   constructor() { }
    
   changeMenu(flag)
   {
     if(flag=='l')
     {
      //this.Menuitems = this.lunchMenuItems;
      this.lunchmenuflag = true;
      this.myCurrentClass = 'red';
     }
     else
     {
      //this.Menuitems = this.BreakfastMenuItems;
      this.lunchmenuflag = false;
      this.myCurrentClass = 'blue';
      
     }

   } 

  ngOnInit() {

    //this.Menuitems = this.BreakfastMenuItems;
    this.myCurrentClass = 'red';
    this.myStyle = {
      'color' : 'blue', 
      'font-size':'24px',
      'font-weight': 'bold'
    }
  }

}
