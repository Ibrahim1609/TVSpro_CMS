import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
@Component({
  selector: 'app-abandoned-root',
  templateUrl: './abandoned-root.component.html',
  styleUrls: ['./abandoned-root.component.scss']
})
export class AbandonedRootComponent implements OnInit {

  constructor(private headerService:HeaderService) {
    this.headerService.setTitle('Abandoned cart')
   }

  ngOnInit(): void {
  }

}
