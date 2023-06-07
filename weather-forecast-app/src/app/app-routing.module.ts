import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCountriesComponent } from './components/common/all-countries/all-countries.component';
import { FavouritesComponent } from './components/common/favourites/favourites.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: 'all', component: AllCountriesComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'weather/:countryCode', component: WeatherForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
