import { Component, OnInit, OnChanges } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-customer-root',
  templateUrl: './customer-root.component.html',
  styleUrls: ['./customer-root.component.scss']
})
export class CustomerRootComponent implements OnInit, OnChanges {

  constructor(private headerService: HeaderService) { 
    this.headerService.setTitle('Customer');
  }

  ngOnChanges() {
    console.log('log works');
  }
  ngOnInit() { }

}
