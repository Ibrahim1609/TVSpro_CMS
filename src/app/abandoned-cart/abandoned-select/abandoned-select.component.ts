import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abandoned-select',
  templateUrl: './abandoned-select.component.html',
  styleUrls: ['./abandoned-select.component.scss']
})
export class AbandonedSelectComponent implements OnInit {
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
  }
 
  cartList=[
    {value:'More than 3'},
    {value:'Less than 3'},
  ]
    PeriodList = [
    { duration: 'Less than 15 days' },
    { duration: 'More than 15 days' }
  ]

   //Filter
   applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
