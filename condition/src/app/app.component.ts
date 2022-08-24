import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title1 = 'Simple Conditional statements';
  show = 'true';
  display = 'no';
  title2 = 'Multiple Conditional statements';
  title3 = 'Nested Loop';
  name: string = "Deku";
  heroes = [{ heroName: 'All Might', realName: 'Toshinori',acc:['fb','ig','line']},
    { heroName: 'Eraser Head', realName: 'Aizawa',acc:['twitter','viber'] },
    { heroName: 'Red Riot', realName: 'Kirishima',acc:['telegram','ig','line']}
  ];
}
