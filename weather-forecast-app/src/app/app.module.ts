import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCountriesComponent } from './components/common/all-countries/all-countries.component';
import { FavouritesComponent } from './components/common/favourites/favourites.component';
import { WeatherForecastComponent } from './components/common/weather-forecast/weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './components/shared/country-card/country-card.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { WeatherCardComponent } from './components/shared/weather-card/weather-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    FavouritesComponent,
    WeatherForecastComponent,
    CountryCardComponent,
    ErrorComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
