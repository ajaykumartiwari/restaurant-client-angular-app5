import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Restaurant } from "../model/restaurant.model";
import { RestaurantService } from "./restaurant.service";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.css"]
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[];
  restaurant: Restaurant;
  p;

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }

  deleteRestaurants(restaurant: Restaurant): void {
    this.restaurantService.deleteRestaurants(restaurant).subscribe(data => {
      this.restaurants = this.restaurants.filter(u => u !== restaurant);
    });
  }
}
