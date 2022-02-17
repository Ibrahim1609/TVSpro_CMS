import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationSelectComponent } from './location-select/location-select.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationRootComponent } from './location-root/location-root.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LocationSelectComponent,
    LocationListComponent,
    LocationRootComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    LocationSelectComponent,
    LocationListComponent,
    LocationRootComponent
  ]
})
export class LocationModule { }
