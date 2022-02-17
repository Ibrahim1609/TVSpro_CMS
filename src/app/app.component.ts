import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  url: any;


  constructor(private router: Router,
    public authentication: AuthenticationService) {
    this.navigatePage(this.url);
  }

  ngOnInit() {

  }

  navigatePage(url: string | UrlTree) {
    this.router.navigateByUrl(url);
  }

}
