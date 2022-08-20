import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  template: `
	  <ng-template ngFor let-item [ngForOf]="Fruits" let-i="index"> 
   <p>{{Fruits[i]}}</p> 
   </ng-template> 
` ,
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  constructor() { }
  Fruits = ["mango","apple","orange","grapes"]; 
 
  ngOnInit(): void {
  }

}
