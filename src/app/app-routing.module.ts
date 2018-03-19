import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './components/front/front.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MovieComponent } from './components/movie/movie.component';
import { NewsComponent } from './components/news/news.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { WeatherFavComponent } from './components/weather/weather-fav/weather-fav.component';


const routes : Routes = [
  {
    path : 'main',
    component : FrontComponent
  },
  {
    path : '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path : 'main/weather',
    component : WeatherComponent
  },
  {
    path : 'main/movie',
    component : MovieComponent
  },
  {
    path : 'main/news',
    component : NewsComponent
  },
  {
    path : 'main/restaurant',
    component : RestaurantComponent
  },
  {
    path : 'main/weather/fav',
    component : WeatherFavComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
