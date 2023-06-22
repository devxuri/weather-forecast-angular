import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { FavouritesComponent } from './favourites.component';
import { CountriesService } from '../all-countries/services/countries.service';
import { InnernavComponent } from 'src/app/shared/innernav/innernav.component';
import { CountryCardComponent } from 'src/app/shared/country-card/country-card.component';


describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;
  let countriesService: CountriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouritesComponent, InnernavComponent, CountryCardComponent],
      imports: [HttpClientTestingModule],
      providers: [CountriesService]
    }).compileComponents();

    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    countriesService = TestBed.inject(CountriesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize favouriteCountryCodes', () => {
    expect(component.favouriteCountryCodes).toBeDefined();
  });

  it('should initialize favouriteCountriesSubscription', () => {
    expect(component.favouriteCountriesSubscription).toBeDefined();
  });

  it('should initialize favouriteCountries', () => {
    expect(component.favouriteCountries).toBeDefined();
  });

  it('should remove a country from favourites', () => {
    component.favouriteCountries = [{ code: 'US', name: 'United States' }, { code: 'CA', name: 'Canada' }];

    component.removeFromFavourites('US');

    expect(component.favouriteCountries).toEqual([{ code: 'CA', name: 'Canada' }]);
  });

});
