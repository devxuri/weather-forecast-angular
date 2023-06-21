import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FavouritesService {
  private favouriteCountries: string[] = [];

  constructor() {
    this.loadFavourites();
  }

  addToFavourites(countryCode: string): void {
    if (!this.isFavourite(countryCode)) {
      this.favouriteCountries.push(countryCode);
      this.saveFavourites();
    }
  }

  removeFromFavourites(countryCode: string): void {
    const index = this.favouriteCountries.indexOf(countryCode);
    if (index !== -1) {
      this.favouriteCountries.splice(index, 1);
      this.saveFavourites();
    }
  }

  getFavouriteCountries(): any[] {
    return this.favouriteCountries;
  }

  isFavourite(countryCode: string): boolean {
    return this.favouriteCountries.includes(countryCode);
  }

  private loadFavourites(): void {
    const favourites = localStorage.getItem('favourites');
    if (favourites) {
      this.favouriteCountries = JSON.parse(favourites);
    }
  }

  private saveFavourites(): void {
    localStorage.setItem('favourites', JSON.stringify(this.favouriteCountries));
  }
}
