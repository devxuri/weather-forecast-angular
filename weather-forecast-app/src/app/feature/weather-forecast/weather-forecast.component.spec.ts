import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { RoutingService } from 'src/app/core/routing.service';
import { CountriesService } from '../all-countries/services/countries.service';
import { CountryCardComponent } from 'src/app/shared/country-card/country-card.component';
import { WeatherCardComponent } from 'src/app/shared/weather-card/weather-card.component';
import { InnernavComponent } from 'src/app/shared/innernav/innernav.component';

import { WeatherForecastComponent } from './weather-forecast.component';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;
  let mockActivatedRoute: any;
  let mockWeatherService: any;
  let mockRoutingService: any;
  let mockCountriesService: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      params: of({ countryCode: 'US' }) 
    };

    mockWeatherService = {
      getWeatherForecast: jasmine.createSpy('getWeatherForecast').and.returnValue(of([]))
    };

    mockRoutingService = {
      navigateTo: jasmine.createSpy('navigateTo')
    };

    mockCountriesService = {
      getCountryByFilterCode: jasmine.createSpy('getCountryByFilterCode').and.returnValue(of([]))
    };

    await TestBed.configureTestingModule({
      declarations: [WeatherForecastComponent, CountryCardComponent, WeatherCardComponent,InnernavComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: WeatherService, useValue: mockWeatherService },
        { provide: RoutingService, useValue: mockRoutingService },
        { provide: CountriesService, useValue: mockCountriesService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
