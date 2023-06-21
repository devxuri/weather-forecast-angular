import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  
  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.configService.allCountriesUrl).pipe(
      map((response: any[]) => {
        return response.map(country => {
          const flag = country.flags?.svg || '';
          const name = country.name?.common || '';
          const capital = country.capital?.[0] || '';
          const code = country.altSpellings?.[0] || '';
          const lat = country.latlng?.[0] || '';
          const lng = country.latlng?.[1] || '';

          return {
            flag,
            name,
            capital,
            code,
            lat,
            lng
          };
        }).sort((a, b) => a.name.localeCompare(b.name));
      }),
      catchError(error => {
        console.error('Error fetching data:', error);
        return of([]);
      })
    );
  }

  getCountriesByFilterName(filterText: string): Observable<any[]> {
    return this.getAllCountries().pipe(
      map(countries => countries.filter(country => country.name.toLowerCase().includes(filterText.toLowerCase())))
    );
  }

  getCountriesByFilterCodes(filterCodes: string[]): Observable<any[]> {
    const combinedData: Observable<any>[] = [];
  
    for (const countryCode of filterCodes) {
      combinedData.push(this.getCountryByFilterCode(countryCode));
    }
  
    return forkJoin(combinedData).pipe(
      switchMap((arrays: any[]) => {
        const combinedArray = [].concat.apply([], arrays);
        return of(combinedArray);
      })
    );
  }
  
  getCountryByFilterCode(filterText: string): Observable<any[]> {
    return this.getAllCountries().pipe(
      map(countries => countries.filter(country => country.code.toLowerCase() === filterText.toLowerCase()))
    );
  }
  
}