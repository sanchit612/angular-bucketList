import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFavItemComponent } from './weather-fav-item.component';

describe('WeatherFavItemComponent', () => {
  let component: WeatherFavItemComponent;
  let fixture: ComponentFixture<WeatherFavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
