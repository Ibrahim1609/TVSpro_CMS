import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderSelectComponent } from './order-select/order-select.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderRootComponent } from './order-root/order-root.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    OrderCardComponent,
    OrderSelectComponent,
    OrderTableComponent,
    OrderRootComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

  ],
  exports: [
    OrderCardComponent,
    OrderSelectComponent,
    OrderTableComponent,
    OrderRootComponent
  ]
})
export class OrderModule { }
