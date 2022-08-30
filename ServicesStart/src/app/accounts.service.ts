import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor(private logService:LoggingService) {
    
  }
  addAccount(name:string,status:string) {
    this.accounts.push({ name: name, status: status });
    this.logService.logStatusChange(status);
  }
  updateStatus(id: number, newstatus: string) {
    this.accounts[id].status = newstatus;
    this.logService.logStatusChange(newstatus);
  }
}