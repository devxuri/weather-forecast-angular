import { Component, Input } from '@angular/core';
import { RoutingService } from 'src/app/core/routing.service';

@Component({
  selector: 'innernav',
  templateUrl: './innernav.component.html'
})
export class InnernavComponent {
  @Input() callingComponent!: string;

  constructor(private routingService: RoutingService) {}

  isCalling(callingComponent: string): void {
    if (callingComponent === 'countries') {
      this.navigateTo('all');
    } else if (callingComponent === 'favourites') {
      this.navigateTo('favourites');
    }
  }

  navigateTo(route: string): void {
    this.routingService.navigateTo(route);
  }
}
