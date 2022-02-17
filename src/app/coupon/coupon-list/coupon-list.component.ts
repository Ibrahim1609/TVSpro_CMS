import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  position: any;
  name: string;
  userLimit: any;
  status: any;
  validity: any;
  couponCode: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Festive Coupon', couponCode: 'SUPER512', userLimit: '10', status: 'ACTIVE', validity: '20-10-2021 - 31-10-2021' },
  { position: 1, name: 'New user Coupon', couponCode: 'NEW100', userLimit: '25', status: 'DEACTIVATED', validity: '20-10-2021 - 24-10-2021' },
  { position: 1, name: 'Super Coupon', couponCode: 'ALDP784', userLimit: '2', status: 'ACTIVE', validity: '20-10-2021 - 31-10-2021' },
  { position: 1, name: 'Diwali Coupon', couponCode: 'CRCK784', userLimit: '2', status: 'ACTIVE', validity: '20-10-2021 - 31-10-2021' },
  { position: 1, name: 'Bonus Coupon', couponCode: 'ALDP784', userLimit: '2', status: 'DEACTIVATED', validity: '20-10-2021 - 31-10-2021' },
];


@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})

export class CouponListComponent implements OnInit {
  columns: any;

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name', 'couponCode', 'position', 'userLimit', 'status', 'validity'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  //Filter
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}

