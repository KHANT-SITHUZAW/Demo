import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeTest';
  today = new Date();
  capString(txt:string) {
    return txt.toUpperCase();
  }
  str = "hello!How am I?"
  newstr= this.str.charAt(0).toUpperCase() + this.str.slice(1);
  user = {
    realname: "nagato",
    nickname: "pain",
    age:"30"
  }
}
