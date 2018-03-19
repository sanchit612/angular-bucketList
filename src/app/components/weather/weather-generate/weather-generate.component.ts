import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-generate',
  templateUrl: './weather-generate.component.html',
  styleUrls: ['./weather-generate.component.css']
})
export class WeatherGenerateComponent implements OnInit {

  public city: any;
  constructor() { }

  ngOnInit() {
  }

  setCity(event) {
      this.city = event.searchedCity;
    }
}
