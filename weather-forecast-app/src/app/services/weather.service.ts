import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
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

    getCountriesByFilter(filterText: string): Observable<any[]> {
      return this.getAllCountries().pipe(
        map(countries => countries.filter(country => country.name.toLowerCase().includes(filterText.toLowerCase())))
      );
    }

    getWeatherForecast(code: string): Observable<any> {
      return this.getAllCountries().pipe(
        map(countries => countries.find(country => country.code === code)),
        switchMap(country => {
          const weatherApiRequest = `${this.configService.weatherUrl}lat=${country.lat}&lon=${country.lng}`;
          return this.http.get(weatherApiRequest).pipe(
            map((response: any) => {
              const forecastData: any[] = [];
              const addedDates: string[] = [];
    
              response.properties.timeseries.forEach((timeseries: any) => {
                const date = timeseries.time.split('T')[0] || '';
                const time = this.getTimeOfDay(timeseries.time);
    
                if (!addedDates.includes(date)) {
                  const humidity = timeseries.data.instant.details.relative_humidity || '';
                  const temperature = timeseries.data.instant.details.air_temperature || '';
                  const day = this.getDayOfWeek(date);
                  let symbol_code = timeseries.data.next_12_hours?.summary?.symbol_code || '';
                  if (!symbol_code) {
                    symbol_code = 'clearsky_day';
                  } 
                  forecastData.push({
                    humidity,
                    temperature,
                    date,
                    day,
                    time,
                    symbol_code
                  });
    
                  addedDates.push(date);
                }
              });
    
              return forecastData;
            }),
            catchError(error => {
              console.error('Error fetching weather forecast:', error);
              return of([]);
            })
          );
        })
      );
    }
    

    private getDayOfWeek(date: string): string {
      const jsDate = new Date(date);
      const options = { weekday: 'long' };
      return formatDate(jsDate, 'EEEE', 'en-US');
    }

    private getTimeOfDay(day: string): string{
      const formattedTime = formatDate(day, 'hh:mm a', 'en-US');
      return formattedTime;
    }

    
}
