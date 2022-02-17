import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
@Component({
  selector: 'app-location-root',
  templateUrl: './location-root.component.html',
  styleUrls: ['./location-root.component.scss']
})
export class LocationRootComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setTitle('Location');
  }

  ngOnInit(): void {
  }

}
