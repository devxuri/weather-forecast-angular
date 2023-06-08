import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-forecast-app';

  weatherData: any;
  searchData: any;
  
  

  constructor(private weatherService: WeatherService) {}

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
}
