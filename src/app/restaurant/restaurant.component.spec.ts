import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Restaurant } from '../model/restaurant.model'
import { RestaurantComponent } from './restaurant.component';
import {Component, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('Component: RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;
  let submitEl: DebugElement;

  // refine the test module by declaring the test component
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantComponent ]
    })
    .compileComponents();
  }));

  // create component and test fixture
  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
