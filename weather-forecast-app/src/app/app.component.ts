import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-forecast-app';

  weatherData: any;
  searchData: any;
  countriesData: any;
  

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.subscribeToAllCountries();
    this.subscribeToWeather();
    this.subscribeToFilterSearch();
  }

  subscribeToAllCountries(): void {
    this.weatherService.getAllCountries().subscribe({
      next: (data: any[]) => {
        this.countriesData = data; // Store the received data in a variable if needed
        console.log(this.countriesData);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  subscribeToFilterSearch(): void{
    this.weatherService.getCountriesByFilter('z').subscribe({
      next: (data: any) => {
        this.searchData = data;
        console.log(this.searchData);
      },
      error: (error: any) => {
        console.error(error);
      }
    })
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
