import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCountriesComponent } from './feature/all-countries/all-countries.component';
import { FavouritesComponent } from './feature/favourites/favourites.component';
import { WeatherForecastComponent } from './feature/weather-forecast/weather-forecast.component';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'all', component: AllCountriesComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'favourites', component: FavouritesComponent, canActivate: [AuthGuard] },
  { path: 'weather/:countryCode', component: WeatherForecastComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
