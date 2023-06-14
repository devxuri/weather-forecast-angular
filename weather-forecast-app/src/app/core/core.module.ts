import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CountriesService } from './services/countries.service';
import { FavouritesService } from './services/favourites.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, AuthGuard, CountriesService, FavouritesService]
})
export class CoreModule { }
