import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  @Input() combineData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
