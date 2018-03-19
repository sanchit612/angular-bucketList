import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { WeatherApi } from '../../config/weather/api.config';
import { App } from '../../config/weather/app.config';

@Injectable()
export class WeatherService {



  constructor(private http : Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

  searchCity(searchedText){
    return this.http.get(WeatherApi.search_api + searchedText).map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   addFav(city:any) {
return this.http.post(App.jsonData+"favourites", city, {headers: this.headers})
   .map(data => data.json(),
 (error: any)=>this.handleError(error));
}

getFav() {
    return this.http.get(App.jsonData+"db").map(data => data.json(),
    (error: any)=>this.handleError(error));
  }

  remove(city) {
    return this.http.delete(App.jsonData+"favourites/"+city.id, { headers: this.headers })
      .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }

  update(oldValue, newValue) {
    return this.http.put(App.jsonData+"favourites/"+oldValue.id, newValue)
    .map( data=>data.json(),
    (error : any) => this.handleError(error));
  }

  }
