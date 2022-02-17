import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbandonedCartRoutingModule } from './abandoned-cart-routing.module';
import { AbandonedSelectComponent } from './abandoned-select/abandoned-select.component';
import { AbandonedListComponent } from './abandoned-list/abandoned-list.component';
import { AbandonedRootComponent } from './abandoned-root/abandoned-root.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AbandonedSelectComponent,
    AbandonedListComponent,
    AbandonedRootComponent
  ],
  imports: [
    CommonModule,
    AbandonedCartRoutingModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    AbandonedSelectComponent,
    AbandonedListComponent,
    AbandonedRootComponent
  ]
})
export class AbandonedCartModule { }
