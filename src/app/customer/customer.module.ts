import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerCardsComponent } from './customer-cards/customer-cards.component';
import { CustomerRootComponent } from './customer-root/customer-root.component';
import { CustomerSelectComponent } from './customer-select/customer-select.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CouponModalComponent } from '../coupon-modal/coupon-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    CustomerCardsComponent,
    CustomerRootComponent,
    CustomerSelectComponent,
    CustomerTableComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    CustomerCardsComponent,
    CustomerRootComponent,
    CustomerSelectComponent,
    CustomerTableComponent,
    CustomerDetailComponent
  ]
})
export class CustomerModule { }
