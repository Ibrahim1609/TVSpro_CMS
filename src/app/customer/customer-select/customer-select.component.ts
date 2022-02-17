import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.scss']
})
export class CustomerSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deviceList = [
    { devices: 'AC' },
    { devices: 'Mobile Phone' },
    { devices: 'TV' },
    { devices: 'Laptop' },
    { devices: 'Refrigerator' },
    { devices: 'Washing Machine' },
  ]
  servicesList = [
    { services: 'Repair' },
    { services: 'AMC' },
    { services: 'Installation/Uninstallation' },
  ]
  statusList = [
    { status: 'Active' },
    { status: 'In-Actice' }
  ]
}
