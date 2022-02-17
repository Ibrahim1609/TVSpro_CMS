import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  columns: string[] = ['location', 'repair', 'EW', 'AMC', 'other', 'Total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  drop(event: any) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  //Filter
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  location: any;
  EW: any;
  repair: any;
  AMC: any;
  other: any;
  Total: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { location: '600045', EW: '12', repair: 'will01@gmail.com', AMC: 'Initiated', other: '54 days', Total: 150 },
  { location: '600028', EW: '45', repair: 'abdq8@gmail.com', AMC: 'InProgress', other: '30 days', Total: 432 },
  { location: '600123', EW: '2', repair: 'will01@gmail.com', AMC: 'Completed', other: '10 days', Total: 67 },
  { location: '600067', EW: '18', repair: 'ryan.fisher@mail.com', AMC: 'Initiated', other: '25 days', Total: 98 },
  { location: '600022', EW: '6', repair: 'frank.ramirez@mail.com', AMC: 'Completed', other: '12 days', Total: 125 },
  { location: '600445', EW: '65', repair: 'steve.banks@mail.com', AMC: 'InProgress', other: '17 days', Total: 178 }
]