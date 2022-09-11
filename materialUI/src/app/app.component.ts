import { Component,ViewChild,OnInit,AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Owner } from './owner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild(MatSort) sort!: MatSort;
  title = 'materialUI';
  dataSource = new MatTableDataSource<Owner>(ELEMENT_DATA);
  displayedColumns = ['id', 'name', 'dateOfBirth', 'address', 'details', 'update', 'delete'];
  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }
  ngOnInit() {
 
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: Owner[] = [
  { id: 13, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 14, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 15, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 16, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 17, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 18, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 19, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 20, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 1, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 2, name: 'Helium', dateOfBirth: new Date(), address: 'Thingangyun' },
  { id: 3, name: 'Lithium', dateOfBirth: new Date(), address: 'Tharkayta' },
  { id: 4, name: 'Beryllium', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 5, name: 'Boron', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 6, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 7, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 8, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 9, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 10, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 11, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' },
  { id: 12, name: 'Hydrogen', dateOfBirth: new Date(), address: 'Hledan' }
 
];
