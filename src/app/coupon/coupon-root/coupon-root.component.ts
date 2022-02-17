import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
@Component({
  selector: 'app-coupon-root',
  templateUrl: './coupon-root.component.html',
  styleUrls: ['./coupon-root.component.scss']
})
export class CouponRootComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setTitle('Coupon Management');
  }

  ngOnInit(): void {
  }

}
