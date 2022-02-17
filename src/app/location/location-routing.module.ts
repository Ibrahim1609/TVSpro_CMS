import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationRootComponent } from './location-root/location-root.component';
import { LocationSelectComponent } from './location-select/location-select.component';

const routes: Routes = [
  { path: '', component: LocationRootComponent },
  { path: 'locationSelect', component: LocationSelectComponent },
  { path: 'locationList', component: LocationListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
