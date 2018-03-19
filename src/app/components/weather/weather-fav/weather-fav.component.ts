import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather/weather.service';


@Component({
  selector: 'app-weather-fav',
  templateUrl: './weather-fav.component.html',
  styleUrls: ['./weather-fav.component.css']
})
export class WeatherFavComponent implements OnInit {

  favCities = [];

  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    this.weatherService.getFav().subscribe((res) => {
      this.favCities = res.favourites;
    },(error) => {
      alert("Please try again.");
    });
  }

}
