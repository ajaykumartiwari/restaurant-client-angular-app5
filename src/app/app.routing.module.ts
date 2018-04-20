import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/index';

import { RestaurantComponent } from './restaurant/restaurant.component';
import {AddRestaurantComponent} from './restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './restaurant/update-restaurant.component';
import { Restaurant } from './model/restaurant.model';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'add', component: AddRestaurantComponent },
  { path: 'update/:id', component: UpdateRestaurantComponent },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }