import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderRootComponent } from './order-root/order-root.component';
import { OrderTableComponent } from './order-table/order-table.component';

const routes: Routes = [
  { path: '', component: OrderRootComponent },
  { path: 'orderCard', component: OrderCardComponent },
  { path: 'orderSelect', component: OrderTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
