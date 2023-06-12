import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavouritesService } from '../../../services/favourites.service';
import { Observable } from 'rxjs';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'country-card',
  templateUrl: './country-card.component.html'
})
export class CountryCardComponent {
  @Input() countries: any;
  @Input() callingComponent!: string;
  @Output() removeFromFavourites: EventEmitter<string> = new EventEmitter<string>();
  @Output() addToFavourites: EventEmitter<string> = new EventEmitter<string>();

  constructor(private favouritesService: FavouritesService, private routingService: RoutingService){

  }

  onAddToFavourites(countryCode: string): void {
    this.favouritesService.addToFavourites(countryCode);
  }

  onRemoveFromFavourites(countryCode: string): void {
    if (this.callingComponent === 'favourites') {
      this.removeFromFavourites.emit(countryCode);
    }
    this.favouritesService.removeFromFavourites(countryCode);
  }

  isFavourite(countryCode: string): boolean {
    return this.favouritesService.isFavourite(countryCode);
  }

  isWeather(): boolean{
    return this.callingComponent === 'weather';
  }

  redirectToWeatherPage(countryCode: string): void  {
    this.routingService.navigateToWeatherPage(countryCode);
  }

}
