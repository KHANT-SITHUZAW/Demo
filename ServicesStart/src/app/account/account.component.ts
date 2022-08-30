import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent {

  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(private loggService:LoggingService,private accountService:AccountsService) {
    
  }
  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id, status);
    this.loggService.logStatusChange(status);
  }
}
