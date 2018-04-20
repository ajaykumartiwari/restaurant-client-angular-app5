import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import 'rxjx/add/operator/toPromise';

import { Restaurant } from "../model/restaurant.model";
import { RestaurantService } from "./restaurant.service";

@Component({
  templateUrl: "./update-restaurant.component.html",
  styleUrls: ["./update-restaurant.component.css"]
})
export class UpdateRestaurantComponent implements OnInit {
  
  id: number;
  restaurant;
  restaurants: Restaurant[];
  restaurantObj: object;
  private headers = new Headers({ "Content-Type": "application/json" });

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  updateRestaurants(restaurant: Restaurant): void {
    this.restaurantService.updateRestaurants(restaurant).subscribe(data => {
      //this.restaurants = this.restaurants.filter(update => update !== restaurant);
      alert("Restaurant Updated Successfully");
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    this.restaurantService.getRestaurants().subscribe(data => {
      //console.log("1")
      this.restaurants = data;
      for (var i = 0; i < this.restaurants.length; i++) {
        console.log("Hi");
        if (this.restaurants[i].id === this.id) {
          this.restaurant = this.restaurants[i];
          console.log(this.restaurants[i].id);
          break;
        }
      }
    });
  }
}
