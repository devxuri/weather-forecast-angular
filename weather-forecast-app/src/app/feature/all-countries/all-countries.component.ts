import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CountriesService } from 'src/app/core/services/countries.service';

@Component({
  selector: 'all-countries',
  templateUrl: './all-countries.component.html'
})
export class AllCountriesComponent {
  countriesData: any;
  filteredCountries: Observable<any[]> = of([]);
  searchText: string = '';
  private searchSubject: Subject<string> = new Subject<string>();
  navCaller: string = 'countries';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.subscribeToAllCountries();
    this.setupSearchSubscription();
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

  setupSearchSubscription(): void {
    this.searchSubject
      .pipe(
        debounceTime(200),
        distinctUntilChanged(), 
        switchMap((searchText: string) => {
          console.log(searchText);
          if (searchText) {
            return this.countriesService.getCountriesByFilterName(searchText);
          } else {
            return of([]);
          }
        })
      )
      .subscribe((filteredCountries: any[]) => {
        this.filteredCountries = of(filteredCountries);
      });
  }

  filterCountry(): void {
    this.searchSubject.next(this.searchText);
  }

  isSearching(): boolean {
    return this.searchText.trim() === '';
  }
}
