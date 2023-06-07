import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  allCountriesUrl = 'https://restcountries.com/v3.1/all';
  weatherUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?';
}
