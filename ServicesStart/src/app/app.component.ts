import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "service";
  accounts: { name: string, status: string }[] = [];
  constructor(private accService:AccountsService) {
    
  }
  ngOnInit() {
    this.accounts = this.accService.accounts;
  }
}
