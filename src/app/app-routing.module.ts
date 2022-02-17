import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationlayoutComponent } from './applicationlayout/applicationlayout.component';
import { SessionlayoutComponent } from './sessionlayout/sessionlayout.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'customerMod', pathMatch: 'full'
  },
  {
    path: '', component: SessionlayoutComponent,
    children: [
      { path: 'login', loadChildren: () => import("./login/login.module").then(m => m.LoginModule) }
    ]
  },
  {
    path: '', component: ApplicationlayoutComponent,
    children: [
      {
        path: 'customerMod', loadChildren: () => import("./customer/customer.module").then(m => m.CustomerModule)
      },
      {
        path: 'orderMod', loadChildren: () => import("./order/order.module").then(m => m.OrderModule)
      },
      {
        path: 'claimMod', loadChildren: () => import("./claim/claim.module").then(m => m.ClaimModule)
      },
      {
        path: 'couponMod', loadChildren: () => import("./coupon/coupon.module").then(m => m.CouponModule)
      },
      {
        path: 'abandonedMod', loadChildren: () => import("./abandoned-cart/abandoned-cart.module").then(m => m.AbandonedCartModule)
      },
      {
        path: 'locationMod', loadChildren: () => import("./location/location.module").then(m => m.LocationModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
