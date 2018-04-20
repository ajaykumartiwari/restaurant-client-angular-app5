import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AddRestaurantComponent } from "./add-restaurant.component";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule,MatGridListModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from "@angular/router/testing";
import { RestaurantService } from "./restaurant.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Restaurant } from "../model/restaurant.model"
// fdescribe("add restauraent component test", () => {
//   let component;
//   let router: Router;
//   let restaurantService: RestaurantService;
//   let fixture: ComponentFixture<AddRestaurantComponent>;
//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       declarations: [AddRestaurantComponent],
//       providers:[ RestaurantService ],
//       imports: [ RouterTestingModule, FormsModule, MatButtonModule, MatCardModule, MatInputModule, MatListModule,MatGridListModule, MatToolbarModule, MatIconModule ]
//     }).compileComponents();

//     // fixture = TestBed.createComponent(AddRestaurantComponent);
//     // component = fixture.componentInstance;
//     component=new AddRestaurantComponent(router,restaurantService);
//   });
//   it("add restaurant component defined", () => {
//     expect(component).toBeTruthy();
//     //expect(component).toBeNull;
//   });
//   it('is empty form module', () => {
//       //expect(component.rForm.valid).toBeTruthy();
//   })
// });



import {Component, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

class ajay{
    createRestaurants() {
        return true;
    }
}

fdescribe('AddRestaurantComponent test', () => {
    let component;
  let addRestaurantComponent: AddRestaurantComponent;
  let fixture: ComponentFixture<AddRestaurantComponent>;
  let submit: DebugElement;
  let id: DebugElement;
  let name: DebugElement;
  let location: DebugElement;
  let cuisines: DebugElement;
  let image: DebugElement;
  let review: DebugElement;
  let restaurantService: RestaurantService;
  let router: Router;
  // refine the test module by declaring the test component

  addRestaurantComponent = new  AddRestaurantComponent(router,restaurantService);
  beforeEach( async() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestaurantComponent ],
      imports: [ RouterTestingModule, FormsModule, MatButtonModule, MatCardModule, MatInputModule, MatListModule,MatGridListModule, MatToolbarModule, MatIconModule ],
      providers:[ {provide: RestaurantService, useClass: ajay } ]
    })
    .compileComponents();
  });

  // create component and test fixture
  beforeEach( () => {
    fixture = TestBed.createComponent(AddRestaurantComponent);
   // 
    // get test component from the fixture
    // addRestaurantComponent = fixture.componentInstance;
    // submit = fixture.debugElement.query(By.css('button'));
    // id = fixture.debugElement.query(By.css('input[type=id]'));
    // name = fixture.debugElement.query(By.css('input[type=name]'));
    // location = fixture.debugElement.query(By.css('input[type=location]'));
    // cuisines = fixture.debugElement.query(By.css('input[type=cuisines]'));
    // image = fixture.debugElement.query(By.css('input[type=image]'));
    // review = fixture.debugElement.query(By.css('input[type=review]'));
    
    
     fixture.detectChanges();
  });

  it('should create new restaurant records to event',async() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
    //   let restaurant: Restaurant;
    //   id.nativeElement.value = 1;
    //   name.nativeElement.value = "Black Perl"
    //   location.nativeElement.value = "kormangala"
    //   cuisines.nativeElement.value = "chinese"
    //   image.nativeElement.value = "img1"
    //   review.nativeElement.value = "good"

      let inputId = fixture.debugElement.query(By.css("#id"))
      let inputName = fixture.debugElement.query(By.css("#name"))
      let inputLocation = fixture.debugElement.query(By.css("#location"));
      let Id = inputId.nativeElement;
      let Name = inputName.nativeElement;
      let location = inputLocation.nativeElement;

fixture.whenStable().then(()=> {
    Id.value = '1';
    Name.value = 'Black Perl';
    location.value = "kormangala";
    Id.dispatchEvent(new Event ('input'));
    Name.dispatchEvent(new Event ('input'));
    location.dispatchEvent(new Event ('input'));
    

}).then(() => {
    expect(Id.innerText).toContain('1');
    expect(Name.innerText).toContain('Black Perl');
    expect(location.innerText).toContain('kormangala');
})

    //   //addRestaurantComponent.createRestaurants();
    // expect(restaurant.id).toBe(1);
    // expect(restaurant.name).toBe("Black Perl");
    // expect(restaurant.location).toBe("kormangala");
    // expect(restaurant.cuisines).toBe("chinese");
    // expect(restaurant.image).toBe("img1");
    // expect(restaurant.review).toBe("good");

    // expect(addRestaurantComponent).toBeTruthy();
  });
});


