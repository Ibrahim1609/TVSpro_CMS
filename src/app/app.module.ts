import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { OrderModule } from './order/order.module';
import { ClaimModule } from './claim/claim.module';
import { LocationModule } from './location/location.module';
import { CustomerModule } from './customer/customer.module';
import { CouponModule } from './coupon/coupon.module';
import { AbandonedCartModule } from './abandoned-cart/abandoned-cart.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { CouponModalComponent } from './coupon-modal/coupon-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SessionlayoutComponent } from './sessionlayout/sessionlayout.component';
import { ApplicationlayoutComponent } from './applicationlayout/applicationlayout.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeModalComponent,
    CouponModalComponent,
    SessionlayoutComponent,
    ApplicationlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    LoginModule,
    SharedModule,
    OrderModule,
    ClaimModule,
    LocationModule,
    CustomerModule,
    CouponModule,
    AbandonedCartModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  exports: [
    HomeModalComponent,
    CouponModalComponent,
    SessionlayoutComponent,
    ApplicationlayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
