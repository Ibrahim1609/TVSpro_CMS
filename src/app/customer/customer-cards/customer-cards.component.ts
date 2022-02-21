import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-cards',
  templateUrl: './customer-cards.component.html',
  styleUrls: ['./customer-cards.component.scss']
})
export class CustomerCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardItem = [
    { imageSrc: 'assets/customerGroup.png', tagLine: 'Total', counts: '4000' },
    { imageSrc: 'assets/activeCust.png', tagLine: 'EW', counts: '400' },
    { imageSrc: 'assets/toolCust.png', tagLine: 'AMC', counts: '420' },
    { imageSrc: 'assets/camCust.png', tagLine: 'No of Devices', counts: '420' },
    { imageSrc: 'assets/kitCust.png', tagLine: 'No of Services', counts: '1240' },
  ]

}
