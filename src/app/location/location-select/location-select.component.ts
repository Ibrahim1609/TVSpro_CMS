import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-select',
  templateUrl: './location-select.component.html',
  styleUrls: ['./location-select.component.scss']
})
export class LocationSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  serviceList=[
    {name:'AMC'},
    {name:'EW'},
    {name:'Repair'},
    {name:'Others'},
  ]
}
