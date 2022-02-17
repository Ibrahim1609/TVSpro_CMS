import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.scss']
})
export class OrderRootComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setTitle('Order');
  }

  ngOnInit(): void {
  }

}
