import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/core/services/weather.service';
import { Observable, of } from 'rxjs';
import { RoutingService } from 'src/app/core/services/routing.service';
import { CountriesService } from 'src/app/core/services/countries.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html'
})
export class WeatherForecastComponent implements OnInit {
  countryCode!: string
  countriesDataSubscription: Observable<any[]> = of([]);
  countriesData: any[] = [];
  weatherData: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private routingService: RoutingService,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryCode = params['countryCode'];
      this.fetchWeatherForecast();
    });
    this.fetchCountriesData();
  }

  fetchCountriesData(): void {
    this.countriesService.getCountryByFilterCode(this.countryCode).subscribe(data => {
      this.countriesData = data;
    });
  }

  fetchWeatherForecast(): void {
    this.weatherService.getWeatherForecast(this.countryCode).subscribe({
      next: (data: any[]) => {
        this.weatherData = data;
      },
      error: (data: any[]) => {
        this.routingService.navigateTo('error');
      }}
    );
  }
}
