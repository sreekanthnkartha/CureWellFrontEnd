import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspecializationComponent } from './viewspecialization.component';

describe('ViewspecializationComponent', () => {
  let component: ViewspecializationComponent;
  let fixture: ComponentFixture<ViewspecializationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewspecializationComponent]
    });
    fixture = TestBed.createComponent(ViewspecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
