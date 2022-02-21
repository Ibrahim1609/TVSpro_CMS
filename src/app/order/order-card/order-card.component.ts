import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardData = [
    { imageSrc: 'assets/box.png', tagLine: 'Open', counts: '08' },
    { imageSrc: 'assets/fag.png', tagLine: 'In-Progress', counts: '20' },
    { imageSrc: 'assets/currency.png', tagLine: 'Payment Pending', counts: '04' },
    { imageSrc: 'assets/calendar.png', tagLine: 'Closed This Month', counts: '20' },
  ]

}
