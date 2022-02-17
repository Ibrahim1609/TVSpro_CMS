import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimRoutingModule } from './claim-routing.module';
import { ClaimCardComponent } from './claim-card/claim-card.component';
import { ClaimSelectComponent } from './claim-select/claim-select.component';
import { ClaimTableComponent } from './claim-table/claim-table.component';
import { ClaimRootComponent } from './claim-root/claim-root.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ClaimCardComponent,
    ClaimSelectComponent,
    ClaimTableComponent,
    ClaimRootComponent
  ],
  imports: [
    CommonModule,
    ClaimRoutingModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    ClaimCardComponent,
    ClaimSelectComponent,
    ClaimTableComponent,
    ClaimRootComponent
  ]
})
export class ClaimModule { }
