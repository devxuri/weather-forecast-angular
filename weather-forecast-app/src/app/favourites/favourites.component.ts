import { Component } from '@angular/core';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  constructor(private routingService: RoutingService){

  }

  navigateTo(route: string){
    this.routingService.navigateTo(route);
  }

}
