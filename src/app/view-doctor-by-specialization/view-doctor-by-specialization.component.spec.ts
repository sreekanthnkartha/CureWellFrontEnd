import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorBySpecializationComponent } from './view-doctor-by-specialization.component';

describe('ViewDoctorBySpecializationComponent', () => {
  let component: ViewDoctorBySpecializationComponent;
  let fixture: ComponentFixture<ViewDoctorBySpecializationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDoctorBySpecializationComponent]
    });
    fixture = TestBed.createComponent(ViewDoctorBySpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
