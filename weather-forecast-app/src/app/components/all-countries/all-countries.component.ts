import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing.service';
import { WeatherService } from '../../services/weather.service';

import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent {
  countriesData: any;
  filteredCountries: Observable<any[]> = of([]);
  searchText: string = '';
  searchTimeout: any;

  constructor(
    private routingService: RoutingService,
    private weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
    this.subscribeToAllCountries();
  }

  navigateTo(route: string): void {
    this.routingService.navigateTo(route);
  }

  subscribeToAllCountries(): void {
    this.weatherService.getAllCountries().subscribe({
      next: (data: any[]) => {
        this.countriesData = data;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  filterCountry(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      if (this.searchText) {
        this.filteredCountries = this.weatherService.getCountriesByFilter(this.searchText);
      }
    }, 200);
  }

  isSearching(): boolean {
    return this.searchText.trim() === '';
  }
}
