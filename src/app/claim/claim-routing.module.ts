import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimCardComponent } from './claim-card/claim-card.component';
import { ClaimRootComponent } from './claim-root/claim-root.component';
import { ClaimSelectComponent } from './claim-select/claim-select.component';
import { ClaimTableComponent } from './claim-table/claim-table.component';

const routes: Routes = [
  { path: '', component: ClaimRootComponent },
  { path: 'claimCard', component: ClaimCardComponent },
  { path: 'claimSelect', component: ClaimSelectComponent },
  { path: 'claimTable', component: ClaimTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRoutingModule { }
