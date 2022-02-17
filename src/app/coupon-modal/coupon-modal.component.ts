import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-modal',
  templateUrl: './coupon-modal.component.html',
  styleUrls: ['./coupon-modal.component.scss']
})
export class CouponModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

}
