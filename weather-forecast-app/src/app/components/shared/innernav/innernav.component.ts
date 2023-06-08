import { Component, Input } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'innernav',
  templateUrl: './innernav.component.html',
  styleUrls: ['./innernav.component.scss']
})
export class InnernavComponent {
  @Input() callingComponent!: string;

  constructor(private routingService: RoutingService) {}

  isCalling(callingComponent: string): void {
    if (callingComponent === 'countries') {
      this.navigateTo('');
    } else if (callingComponent === 'favourites') {
      this.navigateTo('favourites');
    }
  }

  navigateTo(route: string): void {
    this.routingService.navigateTo(route);
  }
}
