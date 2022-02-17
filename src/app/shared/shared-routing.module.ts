import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { SelectOptionComponent } from './select-option/select-option.component';

const routes: Routes = [
  { path: '', component: CommonComponent },
  { path: 'common', component: CommonComponent },
  { path: 'selectOption', component: SelectOptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
