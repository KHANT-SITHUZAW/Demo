import { Component } from '@angular/core';
import { User } from './user'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  display = false;
  isLogIn : boolean = false;
  isLogOut: boolean = true; 
  list = [1, 2, 3, 4, 5];
  studentArr: any[] = [ { 
    "id": 1, 
    "name": "student1" 
 }, 
 { 
    "id": 2,
    "name": "student2" 
 }, 
 { 
    "id": 3, "name": "student3"
 },
 { 
    "id": 4, 
    "name": "student4" 
 } 
 ]; 
// trackByData(index:number, studentArr:any): number { 
//    return studentArr.id; 
// }
users: User[] = [ 
   { 
      "userId": 1, 
      "userName": 'User1' 
   }, 
   { 
      "userId": 2, 
      "userName": 'User2' 
   }, 
   ]; 
   currentItem = "Parent";
   myitems = new Array<string>();

   addItem(newItem: string) {
     this.myitems.push(newItem);
   }
   arr = new Array<string>();
   add(data: string) {
      this.arr.push(data);
    }
}
