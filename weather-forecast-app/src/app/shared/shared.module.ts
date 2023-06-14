import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { InnernavComponent } from './innernav/innernav.component';



@NgModule({
  declarations: [CountryCardComponent, WeatherCardComponent, NavbarComponent, ErrorComponent, InnernavComponent],
  imports: [
    CommonModule
  ],
  exports: [CountryCardComponent, WeatherCardComponent,NavbarComponent, ErrorComponent, InnernavComponent]
})
export class SharedModule { }
