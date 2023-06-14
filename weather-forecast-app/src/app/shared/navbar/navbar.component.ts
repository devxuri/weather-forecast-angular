import { Component } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(private routingService: RoutingService){

  }

  navigateTo(route: string): void {
    this.routingService.navigateTo(route);
  }

}
