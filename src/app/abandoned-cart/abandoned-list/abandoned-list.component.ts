import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-abandoned-list',
  templateUrl: './abandoned-list.component.html',
  styleUrls: ['./abandoned-list.component.scss']
})
export class AbandonedListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columns: string[] = ['name', 'mobile', 'mail', 'location', 'position', 'unopen'];
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
  mobile: any;
  mail: string;
  location: string;
  unopen: any;
}

//ArrayObject of periodic element
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 3, name: 'Will Diaz', mobile: '+91 - 98765 43210', mail: 'will01@gmail.com', location: 'Initiated', unopen: '54 days' },
  { position: 2, name: 'Mike Matthews', mobile: '+91 - 98765 43210', mail: 'abdq8@gmail.com', location: 'InProgress', unopen: '30 days' },
  { position: 5, name: 'Richard Gray', mobile: '+91 - 98765 43210', mail: 'will01@gmail.com', location: 'Completed', unopen: '10 days' },
  { position: 4, name: 'Michelle Wagner', mobile: '+91 - 98765 43210', mail: 'ryan.fisher@mail.com', location: 'Initiated', unopen: '25 days' },
  { position: 3, name: 'Sara Weber', mobile: '+91 - 98765 43210', mail: 'frank.ramirez@mail.com', location: 'Completed', unopen: '12 days' },
  { position: 4, name: 'Johnny Carpenter', mobile: '+91 - 98765 43210', mail: 'steve.banks@mail.com', location: 'InProgress', unopen: '17 days' }
]