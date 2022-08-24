import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mywidth = "100";
  title = 'databinding';
  name = "Death Note";
  disable = false;
  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHot-tWgmyAXE3P4o6cE3z4VQUvzmEF_kvEw&usqp=CAU";
  changetxt() {
    this.name = "Kiss Note";
  }
  changeColor() {
    if (this.disable) {
      this.mycolor = 'gray';
      this.disable = false;
    }
    else {
      this.disable = true;
        this.mycolor = 'brown';
      }
  }
  mycolor = "red";
}
