import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotFoundErrorComponent } from './pagenot-found-error.component';

describe('PagenotFoundErrorComponent', () => {
  let component: PagenotFoundErrorComponent;
  let fixture: ComponentFixture<PagenotFoundErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagenotFoundErrorComponent]
    });
    fixture = TestBed.createComponent(PagenotFoundErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
