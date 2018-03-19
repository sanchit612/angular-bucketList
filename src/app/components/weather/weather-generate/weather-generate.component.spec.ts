import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGenerateComponent } from './weather-generate.component';

describe('WeatherGenerateComponent', () => {
  let component: WeatherGenerateComponent;
  let fixture: ComponentFixture<WeatherGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
