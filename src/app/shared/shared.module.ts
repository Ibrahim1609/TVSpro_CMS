import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CommonComponent } from './common/common.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SelectOptionComponent } from './select-option/select-option.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    CommonComponent,
    SelectOptionComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports: [
    CommonComponent,
    SelectOptionComponent,
  ]
})
export class SharedModule { }
