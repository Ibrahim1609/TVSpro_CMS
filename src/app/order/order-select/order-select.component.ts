import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-select',
  templateUrl: './order-select.component.html',
  styleUrls: ['./order-select.component.scss']
})
export class OrderSelectComponent implements OnInit {

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
  brandList = [
    { brand: 'Apple' },
    { brand: 'Samsung' }
  ]
  statusList = [
    { status: 'Initiated' },
    { status: 'InProgress' },
    { status: 'Completed' },
  ]
}
