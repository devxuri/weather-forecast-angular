import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent {
  @Input() weatherForecast: any;
  constructor(){
  }
}
