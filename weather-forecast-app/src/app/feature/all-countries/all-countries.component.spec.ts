import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AllCountriesComponent } from './all-countries.component';
import { InnernavComponent } from 'src/app/shared/innernav/innernav.component';

describe('AllCountriesComponent', () => {
  let component: AllCountriesComponent;
  let fixture: ComponentFixture<AllCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllCountriesComponent, InnernavComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AllCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
