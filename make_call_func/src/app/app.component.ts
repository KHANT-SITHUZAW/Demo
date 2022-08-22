import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'make_call_func';
  sentData = "None";
  count = 0;
  getName(name: string | number) {
    alert(name);
  }

  getOutput(name: any) {
    alert(name);
  }

  getData(val:string) {
    console.log(val);
  }
  sendData(data:any) {
    this.sentData = data;
  }
  counter(condition:boolean) {
    if (condition) { 
      this.count++;
    }
    else {
      this.count--;
    }
  }
}
