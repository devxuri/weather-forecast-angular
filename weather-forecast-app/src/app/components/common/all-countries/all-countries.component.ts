import { Component } from '@angular/core';
import { RoutingService } from '../../../services/routing.service';
import { CountriesService } from '../../../services/countries.service';

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
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
    this.subscribeToAllCountries();
  }

  navigateTo(route: string): void {
    this.routingService.navigateTo(route);
  }

  subscribeToAllCountries(): void {
    this.countriesService.getAllCountries().subscribe({
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
        this.filteredCountries = this.countriesService.getCountriesByFilterName(this.searchText);
      }
    }, 200);
  }

  isSearching(): boolean {
    return this.searchText.trim() === '';
  }
}
