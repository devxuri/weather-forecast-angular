import { Component } from '@angular/core';
import { RoutingService } from '../services/routing.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})

export class AllCountriesComponent {
  countriesData: any;
  constructor(private routingService: RoutingService, private weatherService: WeatherService){
  }
  ngOnInit(): void {
    this.subscribeToAllCountries();
  }

  navigateTo(route: string): void{
    this.routingService.navigateTo(route);
  }

  subscribeToAllCountries(): void{
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

}
