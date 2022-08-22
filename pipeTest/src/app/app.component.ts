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
}
