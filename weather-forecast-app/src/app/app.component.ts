import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-forecast-app';

  weatherData: any;
  searchData: any;
  
  

  constructor(private weatherService: WeatherService, private routingService: RoutingService) {}

  ngOnInit(): void {
    this.subscribeToWeather();
  }



  subscribeToWeather(): void {
    this.weatherService.getWeatherForecast('IN').subscribe({
      next: (data: any) => {
        this.weatherData = data; 
        console.log(this.weatherData);
      },
      error: (error: any) => {
        console.error('Error fetching weather data:', error);
      }
    });
  }

  navigateTo(route: string): void {
    this.routingService.navigateTo(route);
  }
}
