import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService implements OnInit {
  public title = new BehaviorSubject('');
  constructor() { }
  ngOnInit(): void {
    this.setTitle;
  }
  setTitle(title: string) {
    this.title.next(title);
  }

}
