import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

//importing Restaurant model class
import { Restaurant } from "../model/restaurant.model";

//Define headers content type  
const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" })
};

@Injectable()
export class RestaurantService {
  restaurant: Restaurant;
  constructor(private http: HttpClient) {}

  //private restaurantUrl = 'http://localhost:8080/api';
  //private restaurantUrl = '/api';
  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8080/api/getall");
  }

  public deleteRestaurants(restaurants){
    return this.http.delete(
      "http://localhost:8080/api/delete" + "/" + restaurants.id
    );
  }

  public createRestaurants(restaurants): Observable<Restaurant> {
    return this.http.post<Restaurant>(
      "http://localhost:8080/api/restaurant",
      restaurants
    );
  }

  public updateRestaurants(restaurants): Observable<Restaurant> {
   // console.log("Restaurant Id"+restaurants.id);
   const id = restaurants.id;
   
    return this.http.put<Restaurant>(
      "http://localhost:8080/api/update/${id}", restaurants
    );
  }

  // public getRestaurants() {
  //   return this.http.get<Restaurant[]>(this.restaurantUrl+"/"+"getall");
  // }

  // public deleteRestaurants(restaurants) {
  //   return this.http.delete(
  //     this.restaurantUrl + "/" + restaurants.id
  //   );
  // }

  // public createRestaurants(restaurants) {
  //   return this.http.post<Restaurant>(
  //     this.restaurantUrl,
  //     restaurants
  //   );
  // }

  // public updateRestaurants(restaurants) {
  //   return this.http.post<Restaurant>(
  //     //this.restaurantUrl, +"/" + restaurants.id
  //     this.restaurantUrl,restaurants
  //   );
  // }
}
