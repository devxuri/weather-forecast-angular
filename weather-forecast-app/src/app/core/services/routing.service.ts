import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  navigateToWeatherPage(countryCode: string): void{
    this.router.navigate(['/weather/', countryCode]);
  }

}
