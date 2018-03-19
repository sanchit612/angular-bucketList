import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../../../services/weather/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  providers: [WeatherService]
})
export class WeatherSearchComponent implements OnInit {

  @Output() success = new EventEmitter<any>();
  public searchedText: string='';
  public searchedCity : any;
  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
  }

  searchCity(){
    this.weatherService.searchCity(this.searchedText).subscribe(
      (res) =>{
    this.searchedCity = res;
    this.success.emit({
      'searchedCity': this.searchedCity
    });
  }, (error) =>{
    alert("Please enter a valid city.")
  }
)

  }

}
