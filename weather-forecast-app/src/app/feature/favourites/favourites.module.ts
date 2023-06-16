import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FavouritesComponent } from './favourites.component';
import { FavouritesRoutingModule } from './favourites-routing.module';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule, 
    FormsModule,
    SharedModule,
    FavouritesRoutingModule
  ]
})
export class FavouritesModule { }
