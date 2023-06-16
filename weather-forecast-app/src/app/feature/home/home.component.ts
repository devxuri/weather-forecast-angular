import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private routingService: RoutingService){

  }

  navigateTo(route: string):void{
    this.routingService.navigateTo(route);
  }

}
