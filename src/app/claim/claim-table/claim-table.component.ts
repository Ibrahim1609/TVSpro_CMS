import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-claim-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.scss']
})
export class ClaimTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columns: string[] = ['position', 'name', 'weight', 'symbol', 'status'];
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
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', status: 'Initiated' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status: 'InProgress' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status: 'Completed' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: 'Initiated' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', status: 'Completed' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', status: 'InProgress' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', status: 'Initiated' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', status: 'Initiated' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', status: 'InProgress' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', status: 'Initiated' },
];
