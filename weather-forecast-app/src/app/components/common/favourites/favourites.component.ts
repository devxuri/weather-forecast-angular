import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../../../services/favourites.service';
import { CountriesService } from 'src/app/services/countries.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favouriteCountryCodes: any[] = [];
  favouriteCountriesSubscription: Observable<any[]> = of([]);
  favouriteCountries: any[] = [];
  navCaller: string = 'favourites';

  constructor(
    private favouritesService: FavouritesService,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.favouriteCountryCodes = this.favouritesService.getFavouriteCountries();
    this.favouriteCountriesSubscription = this.countriesService.getCountriesByFilterCodes(this.favouriteCountryCodes);
    this.subscribeCountriesData();
  }

  subscribeCountriesData(): void {
    this.favouriteCountriesSubscription.subscribe(data => {
      this.favouriteCountries = data;
      console.log(this.favouriteCountries);
    });
  }

  removeFromFavourites(countryCode: string): void {
    const index = this.favouriteCountries.findIndex(country => country.code === countryCode);
    if (index !== -1) {
      this.favouriteCountries.splice(index, 1);
    }
  }

}
