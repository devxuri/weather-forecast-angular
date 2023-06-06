import { Component, Input } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {
  @Input() countries: any;
  constructor(private favouritesService: FavouritesService){

  }

  addToFavourites(countryCode: string): void {
    this.favouritesService.addToFavourites(countryCode);
  }

  removeFromFavourites(countryCode: string): void {
    this.favouritesService.removeFromFavourites(countryCode);
  }

  isFavourite(countryCode: string): boolean {
    return this.favouritesService.isFavourite(countryCode);
  }

}
