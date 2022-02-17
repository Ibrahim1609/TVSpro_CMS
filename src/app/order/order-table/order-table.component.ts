import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columns: string[] = ['position', 'name', 'devices', 'type', 'date', 'status'];
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
  position: any;
  devices: any;
  type: any;
  date: any;
  status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '00098765', name: '0293884757478837', devices: 'LG | Split - AC', type: 'Repair', date: '26-10-2021', status: 'IN-PROGRESS' },
  { position: '00098765', name: '0293884757476543', devices: 'Whirlpool | Window - AC', type: 'AMC', date: '26-10-2021', status: 'INITIATED' },
  { position: '00098765', name: '0293884757477890', devices: 'Whirlpool | Split - AC', type: 'Repair', date: '26-10-2021', status: 'COMPLETED' },
  { position: '00098764', name: '0293884757477412', devices: 'Apple | iPhone 12 pro', type: 'Repair', date: '21-10-2021', status: 'IN-PROGRESS' },
  { position: '00098764', name: '0293884757477411', devices: 'Apple | iPhone 10 pro', type: 'Repair', date: '20-10-2021', status: 'INITIATED' },
  { position: '00098763', name: '0293884757477210', devices: 'Whirlpool | Split - AC', type: 'AMC', date: '20-10-2021', status: 'COMPLETED' },
  { position: '00098762', name: '0293884757477209', devices: 'Daikin | Split - AC', type: 'Installation/Uninstallation', date: '20-10-2021', status: 'INITIATED' },
];