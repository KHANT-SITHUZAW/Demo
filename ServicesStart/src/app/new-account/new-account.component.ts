import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private logService:LoggingService,private accountService:AccountsService) {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.logService.logStatusChange(accountStatus);
    //const service = new LoggingService();
    //service.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
