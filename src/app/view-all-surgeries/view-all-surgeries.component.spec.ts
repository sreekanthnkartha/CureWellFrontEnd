import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSurgeriesComponent } from './view-all-surgeries.component';

describe('ViewAllSurgeriesComponent', () => {
  let component: ViewAllSurgeriesComponent;
  let fixture: ComponentFixture<ViewAllSurgeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllSurgeriesComponent]
    });
    fixture = TestBed.createComponent(ViewAllSurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
