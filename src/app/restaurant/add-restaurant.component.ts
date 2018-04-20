import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Restaurant } from "../model/restaurant.model";
import { RestaurantService } from "./restaurant.service";

@Component({
  templateUrl: "./add-restaurant.component.html",
  styleUrls: ["./add-restaurant.component.css"]
})
export class AddRestaurantComponent {
    cuisines: string;
    restaurant: Restaurant;

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  createRestaurants(): void {
    this.restaurantService
      .createRestaurants(this.restaurant)
      .subscribe(data => {
        alert("User created successfully.");
      });
  }
}
