import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponSelectComponent } from './coupon-select/coupon-select.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponRootComponent } from './coupon-root/coupon-root.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    CouponSelectComponent,
    CouponListComponent,
    CouponRootComponent,

  ],
  imports: [
    CommonModule,
    CouponRoutingModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSidenavModule,
  ],
  exports: [
    CouponSelectComponent,
    CouponListComponent,
    CouponRootComponent,
  ]
})
export class CouponModule { }
