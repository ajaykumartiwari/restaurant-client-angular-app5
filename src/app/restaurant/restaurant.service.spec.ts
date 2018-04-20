import { TestBed, inject } from "@angular/core/testing";

import { RestaurantService } from "./restaurant.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterModule } from "@angular/router";

fdescribe("RestaurantService", () => {
 let restaurantService: RestaurantService;
 let route: ActivatedRoute;
 let router: Router;
 let http: HttpClient;
 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [RouterModule],
     providers: [RestaurantService]
   });
   restaurantService = new RestaurantService(http);
 });

 it("should be created", () => {
   expect(restaurantService).toBeTruthy();
 });
});