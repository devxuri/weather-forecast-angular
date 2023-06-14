import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FavouritesComponent } from './favourites.component';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule, 
    FormsModule,
    SharedModule
  ]
})
export class FavouritesModule { }
