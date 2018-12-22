import { Directive , ElementRef , HostListener  } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

 @HostListener('mouseenter')onmouseenter()
 {
   this.elementRef.nativeElement.style.fontWeight = "bold"
   this.elementRef.nativeElement.style.backgroundColor = "grey"
 }

 @HostListener('mouseleave')onmouseleave()
 {
   this.elementRef.nativeElement.style.fontWeight = "normal"
   this.elementRef.nativeElement.style.backgroundColor = "initial"
 }

//private elementRef ;
  constructor(private elementRef:ElementRef) {
//private elementRef:ElementRef

//elementRef:ElementRef ; 


   }

}
