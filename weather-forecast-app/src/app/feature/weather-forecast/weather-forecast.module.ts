import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastComponent } from './weather-forecast.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherForecastRoutingModule } from './weather-forecast-routing.module';



@NgModule({
  declarations: [WeatherForecastComponent],
  imports: [
    CommonModule,
    SharedModule,
    WeatherForecastRoutingModule
  ]
})
export class WeatherForecastModule { }
