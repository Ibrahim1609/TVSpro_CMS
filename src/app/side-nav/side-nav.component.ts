import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  title='';
  url: any;


  constructor(private router: Router, private headerService: HeaderService,
    public authentication: AuthenticationService) {
    this.navigatePage(this.url);
  }

  ngOnInit() {
    this.headerService.title.subscribe((title: string) => {
      this.title = title;
    });
  }

  navigatePage(url: string | UrlTree) {
    this.router.navigateByUrl(url);
  }

  Menu = [
    {
      id: '1',
      name: 'Customer',
      imageSrc: 'assets/customer.png',
      url: '/customerMod'
    },
    {
      id: '2',
      name: 'Order',
      imageSrc: 'assets/order.png',
      url: '/orderMod'
    },
    {
      id: '3',
      name: 'Claim',
      imageSrc: 'assets/claim.png',
      url: '/claimMod'
    },
    {
      id: '4',
      name: 'Coupon',
      imageSrc: 'assets/coupon.png',
      url: '/couponMod'
    },
    {
      id: '5',
      name: 'Abandoned cart',
      imageSrc: 'assets/cart.png',
      url: '/abandonedMod'
    },
    {
      id: '6',
      name: 'Location',
      imageSrc: 'assets/location.png',
      url: '/locationMod'
    },
  ]


  showFiller = false;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  logOut() {
    this.authentication.logout();
  }


}
