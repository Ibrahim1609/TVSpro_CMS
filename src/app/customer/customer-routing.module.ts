import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCardsComponent } from './customer-cards/customer-cards.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerRootComponent } from './customer-root/customer-root.component';
import { CustomerSelectComponent } from './customer-select/customer-select.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

const routes: Routes = [
  { path: '', component: CustomerRootComponent },
  { path: 'customerRoot', component: CustomerRootComponent },
  { path: 'customerData', component: CustomerCardsComponent },
  { path: 'customerSelect', component: CustomerSelectComponent },
  { path: 'customerTable', component: CustomerTableComponent },
  { path: 'customerDetail', component: CustomerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
