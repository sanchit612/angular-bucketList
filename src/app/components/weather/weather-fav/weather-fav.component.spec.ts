import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFavComponent } from './weather-fav.component';

describe('WeatherFavComponent', () => {
  let component: WeatherFavComponent;
  let fixture: ComponentFixture<WeatherFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
