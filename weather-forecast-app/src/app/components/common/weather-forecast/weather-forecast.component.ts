import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable } from 'rxjs';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  countryCode!: string;
  weatherForecast: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryCode = params['countryCode'];
      this.fetchWeatherForecast();
    });
  }

  fetchWeatherForecast(): void {
    this.weatherService.getWeatherForecast(this.countryCode).subscribe({
      next: (data: any[]) => {
        this.weatherForecast = data;
        console.log(this.weatherForecast);
      },
      error: (data: any[]) => {
        this.routingService.navigateTo('error');
      }}
    );
  }
}
