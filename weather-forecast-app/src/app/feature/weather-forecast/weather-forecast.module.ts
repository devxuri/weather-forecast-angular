import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastComponent } from './weather-forecast.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [WeatherForecastComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WeatherForecastModule { }
