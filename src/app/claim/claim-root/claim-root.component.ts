import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
@Component({
  selector: 'app-claim-root',
  templateUrl: './claim-root.component.html',
  styleUrls: ['./claim-root.component.scss']
})
export class ClaimRootComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setTitle('Claim');
  }

  ngOnInit(): void {
  }

}
