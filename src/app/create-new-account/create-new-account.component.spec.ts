import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAccountComponent } from './create-new-account.component';

describe('CreateNewAccountComponent', () => {
  let component: CreateNewAccountComponent;
  let fixture: ComponentFixture<CreateNewAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewAccountComponent]
    });
    fixture = TestBed.createComponent(CreateNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
