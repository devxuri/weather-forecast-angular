import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'all', 
  loadChildren: () => import('./feature/all-countries/all-countries.module').then(m => m.AllCountriesModule),
  canActivate: [AuthGuard]},
  { path: 'home', 
  loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },
  { path: 'login', 
  loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)},
  { path: 'favourites',
  loadChildren: () => import('./feature/favourites/favourites.module').then(m => m.FavouritesModule),
  canActivate: [AuthGuard] },
  { path: 'weather/:countryCode', 
  loadChildren: () => import('./feature/weather-forecast/weather-forecast.module').then(m => m.WeatherForecastModule),
  canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
