import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-select',
  templateUrl: './claim-select.component.html',
  styleUrls: ['./claim-select.component.scss']
})
export class ClaimSelectComponent implements OnInit {

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
