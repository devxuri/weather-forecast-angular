import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouritesComponent } from './components/common/favourites/favourites.component';
import { WeatherForecastComponent } from './components/common/weather-forecast/weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/common/home/home.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AllCountriesModule } from './feature/all-countries/all-countries.module';
import { AllCountriesComponent } from './components/common/all-countries/all-countries.component';


@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    WeatherForecastComponent,
    HomeComponent,
    AllCountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AllCountriesModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
