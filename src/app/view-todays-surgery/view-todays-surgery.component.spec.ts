import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodaysSurgeryComponent } from './view-todays-surgery.component';

describe('ViewTodaysSurgeryComponent', () => {
  let component: ViewTodaysSurgeryComponent;
  let fixture: ComponentFixture<ViewTodaysSurgeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTodaysSurgeryComponent]
    });
    fixture = TestBed.createComponent(ViewTodaysSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
