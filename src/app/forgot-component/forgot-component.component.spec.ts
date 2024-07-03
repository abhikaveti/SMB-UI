import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotComponentComponent } from './forgot-component.component';

describe('ForgotComponentComponent', () => {
  let component: ForgotComponentComponent;
  let fixture: ComponentFixture<ForgotComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotComponentComponent]
    });
    fixture = TestBed.createComponent(ForgotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
