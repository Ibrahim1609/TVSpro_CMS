import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: any;
  Date: any;
  devices: any;
  EW: any;
  AMC: any;
  Service: any;
  mobile: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'CU01', name: 'Denise Adams', mobile: ' +91 - 9876543210', Date: '26-10-2021', devices: '01', EW: '01', AMC: '01', Service: '02' },
  { position: 'CU02', name: 'Nick Pierce', mobile: '+91 - 8952143210', Date: ' 26-10-2021', devices: '01', EW: '01', AMC: '01', Service: '02' },
  { position: 'CU03', name: 'Brandon Baker', mobile: '+91 - 9876585210', Date: '22-10-2021', devices: '01', EW: '01', AMC: '01', Service: '02' },
  { position: 'CU04', name: 'Craig Wood', mobile: '+91 - 9996543210', Date: '21-10-2021', devices: '01', EW: '01', AMC: '01', Service: '02' },
  { position: 'CU05', name: 'Ethan Lawson', mobile: '+91 - 9876521478', Date: '20-10-2021', devices: '01', EW: '01', AMC: '01', Service: '02' },
  { position: 'CU06', name: 'Carol Guerrero', mobile: '+91 - 9876514580', Date: '20-10-2021', devices: '01', EW: '01', AMC: '01', Service: '02' },
  { position: 'CU07', name: 'Bruce Valdez', mobile: '+91 - 6876543210', Date: '20-10-2021', devices: '01', EW: '01', AMC: '01', Service: '02' },
  { position: 'CU08', name: 'Rachel Hayes', mobile: '+91 - 7896543210', Date: '10-10-2021', devices: '01', EW: '01', AMC: '01', Service: '02' },
];

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'mobile', 'Date', 'devices', 'EW', 'AMC', 'Service'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private _liveAnnouncer: LiveAnnouncer, public router: Router) { }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  announceSortChange(sortState: any) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

  }
  //Filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
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

  rowDetail() {
    this.router.navigate(['/customerTable']);
  }
}
