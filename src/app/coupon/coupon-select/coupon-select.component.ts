import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-select',
  templateUrl: './coupon-select.component.html',
  styleUrls: ['./coupon-select.component.scss']
})
export class CouponSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  validityList=[
    {validity:'This Week'},
    {validity:'This Month'},
    {validity:'Last Week'},
    {validity:'Last Month'},

  ]
  statusList = [
    { status: 'Activated' },
    { status: 'Deactivated' }
  ]

}
