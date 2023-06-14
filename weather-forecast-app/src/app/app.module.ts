import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AllCountriesModule } from './feature/all-countries/all-countries.module';
import { FavouritesModule } from './feature/favourites/favourites.module';
import { HomeModule } from './feature/home/home.module';
import { WeatherForecastModule } from './feature/weather-forecast/weather-forecast.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AllCountriesModule,
    FavouritesModule,
    CoreModule,
    SharedModule,
    HomeModule,
    WeatherForecastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
