import { Component, OnInit, Input} from '@angular/core';
import { WeatherService } from '../../../../services/weather/weather.service';


@Component({
  selector: 'app-weather-result-list',
  templateUrl: './weather-result-list.component.html',
  styleUrls: ['./weather-result-list.component.css']
})
export class WeatherResultListComponent implements OnInit {

  @Input() city : any;

  constructor(private weatherService : WeatherService) { }
  favList;
  ngOnInit() {
  }

  addFav(city : string) {
    this.weatherService.getFav().subscribe((res)=>{
      this.favList = res.favourites;
      if(this.favList.length >= 10) {
        alert("You have already added 10 cities, Please remove some of them first.")
        return;
      }
      else {
        this.weatherService.addFav(city).subscribe((res) =>{
          alert("City successfully added.")
        }, (error) =>{
        alert("This city could not be added, please try again.")
      })

      }
    },(error)=>{
        alert("Please try again");
         })

}



}
