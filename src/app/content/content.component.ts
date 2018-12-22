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

    //Menuitems : string[] =[] ;
    
  
   constructor() { }
    
   changeMenu(flag)
   {
     if(flag=='l')
     {
      //this.Menuitems = this.lunchMenuItems;
      this.lunchmenuflag = true;
     }
     else
     {
      //this.Menuitems = this.BreakfastMenuItems;
      this.lunchmenuflag = false;
     }

   } 

  ngOnInit() {

    //this.Menuitems = this.BreakfastMenuItems;

  }

}
