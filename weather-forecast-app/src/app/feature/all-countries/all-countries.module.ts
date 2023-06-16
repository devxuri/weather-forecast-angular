import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AllCountriesrRoutingModule } from './all-countries-routing.module';
import { AllCountriesComponent } from './all-countries.component';

@NgModule({
  declarations: [AllCountriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AllCountriesrRoutingModule
  ]
})
export class AllCountriesModule { }
