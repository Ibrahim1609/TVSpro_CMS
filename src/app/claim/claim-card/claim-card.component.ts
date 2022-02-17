import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-card',
  templateUrl: './claim-card.component.html',
  styleUrls: ['./claim-card.component.scss']
})
export class ClaimCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardData = [
    { imageSrc: '/assets/box.png', tagLine: 'Open', counts: '08' },
    { imageSrc: '/assets/fag.png', tagLine: 'In-Progress', counts: '20' },
    { imageSrc: '/assets/calendar.png', tagLine: 'Closed', counts: '20' },
    { imageSrc: '/assets/calTool.png', tagLine: 'Claim This Month', counts: '10' },
  ]

}
