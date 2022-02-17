import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponRootComponent } from './coupon-root/coupon-root.component';
import { CouponSelectComponent } from './coupon-select/coupon-select.component';

const routes: Routes = [
  { path: '', component: CouponRootComponent },
  { path: 'couponSelect', component: CouponSelectComponent },
  { path: 'CouponList', component: CouponListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }
