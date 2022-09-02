import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router) {
    console.log('constructor load');
   }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    console.log('OnInit loaded');
  }
  onReload() {
    this.router.navigate(['/servers']);
  }
}
