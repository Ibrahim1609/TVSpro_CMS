import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbandonedListComponent } from './abandoned-list/abandoned-list.component';
import { AbandonedRootComponent } from './abandoned-root/abandoned-root.component';
import { AbandonedSelectComponent } from './abandoned-select/abandoned-select.component';

const routes: Routes = [
  { path: '', component: AbandonedRootComponent },
  { path: 'abandonedSelect', component: AbandonedSelectComponent },
  { path: 'abandonedList', component: AbandonedListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbandonedCartRoutingModule { }
