import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FrontComponent } from './components/front/front.component';
import { MainHeaderComponent } from './components/front/main-header/main-header.component';
import { FrontPageComponent } from './components/front/front-page/front-page.component';
import { WeatherComponent } from './components/weather/weather.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { MovieComponent } from './components/movie/movie.component';
import { NewsComponent } from './components/news/news.component';
import { WeatherHeaderComponent } from './components/weather/weather-header/weather-header.component';
import { WeatherGenerateComponent } from './components/weather/weather-generate/weather-generate.component';
import { WeatherFavComponent } from './components/weather/weather-fav/weather-fav.component';
import { WeatherFavItemComponent } from './components/weather/weather-fav/weather-fav-item/weather-fav-item.component';
import { WeatherSearchComponent } from './components/weather/weather-generate/weather-search/weather-search.component';
import { WeatherResultListComponent } from './components/weather/weather-generate/weather-result-list/weather-result-list.component';
import { WeatherResultListItemComponent } from './components/weather/weather-generate/weather-result-list/weather-result-list-item/weather-result-list-item.component';
import { AppRoutingModule } from './/app-routing.module';
import { WeatherService } from './services/weather/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FrontComponent,
    MainHeaderComponent,
    FrontPageComponent,
    WeatherComponent,
    RestaurantComponent,
    MovieComponent,
    NewsComponent,
    WeatherHeaderComponent,
    WeatherGenerateComponent,
    WeatherFavComponent,
    WeatherFavItemComponent,
    WeatherSearchComponent,
    WeatherResultListComponent,
    WeatherResultListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
