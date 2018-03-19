import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../../../services/weather/weather.service';

@Component({
  selector: 'app-weather-fav-item',
  templateUrl: './weather-fav-item.component.html',
  styleUrls: ['./weather-fav-item.component.css']
})
export class WeatherFavItemComponent implements OnInit {

  @Input() city;
  newCity : string;
  newCityObject : any;

  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
  }

  remove(city) {
    return this.weatherService.remove(this.city).subscribe((res) =>{
      alert("Successfully Deleted");
      },(err)=>{
        console.log(err);
  })
  }


  update() {
    this.newCity = prompt("Please enter the new city");
    this.weatherService.searchCity(this.newCity).subscribe((res)=>{
      this.newCityObject = res;
     return this.weatherService.update(this.city, this.newCityObject).subscribe(res=>{
       alert("City successfully updated");
     },(error)=>{
       alert("City could not be updated");
     });

    },(error)=>{
      alert("Please enter a valid city");
    });
  }


}
