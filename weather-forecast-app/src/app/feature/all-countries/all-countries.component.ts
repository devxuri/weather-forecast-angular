import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountriesService } from 'src/app/core/services/countries.service';


@Component({
  selector: 'all-countries',
  templateUrl: './all-countries.component.html'
})
export class AllCountriesComponent {
  countriesData: any;
  filteredCountries: Observable<any[]> = of([]);
  searchText: string = '';
  searchTimeout: any;
  navCaller: string = 'countries';

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.subscribeToAllCountries();
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
