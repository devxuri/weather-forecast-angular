import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCountriesComponent } from './components/all-countries/all-countries.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './components/all-countries/country-card/country-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    FavouritesComponent,
    WeatherForecastComponent,
    CountryCardComponent
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
