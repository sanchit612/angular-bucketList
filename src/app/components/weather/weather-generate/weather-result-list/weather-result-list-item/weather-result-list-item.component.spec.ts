import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherResultListItemComponent } from './weather-result-list-item.component';

describe('WeatherResultListItemComponent', () => {
  let component: WeatherResultListItemComponent;
  let fixture: ComponentFixture<WeatherResultListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherResultListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherResultListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
