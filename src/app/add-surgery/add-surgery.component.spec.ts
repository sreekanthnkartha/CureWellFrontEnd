import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurgeryComponent } from './add-surgery.component';

describe('AddSurgeryComponent', () => {
  let component: AddSurgeryComponent;
  let fixture: ComponentFixture<AddSurgeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSurgeryComponent]
    });
    fixture = TestBed.createComponent(AddSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
