import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCountriesComponent } from './components/common/all-countries/all-countries.component';
import { FavouritesComponent } from './components/common/favourites/favourites.component';
import { WeatherForecastComponent } from './components/common/weather-forecast/weather-forecast.component';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './components/common/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'all', component: AllCountriesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'weather/:countryCode', component: WeatherForecastComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
