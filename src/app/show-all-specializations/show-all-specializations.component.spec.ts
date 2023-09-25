import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllSpecializationsComponent } from './show-all-specializations.component';

describe('ShowAllSpecializationsComponent', () => {
  let component: ShowAllSpecializationsComponent;
  let fixture: ComponentFixture<ShowAllSpecializationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllSpecializationsComponent]
    });
    fixture = TestBed.createComponent(ShowAllSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
