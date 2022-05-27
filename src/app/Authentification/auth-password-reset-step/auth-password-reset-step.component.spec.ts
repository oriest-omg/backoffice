import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPasswordResetStepComponent } from './auth-password-reset-step.component';

describe('AuthPasswordResetStepComponent', () => {
  let component: AuthPasswordResetStepComponent;
  let fixture: ComponentFixture<AuthPasswordResetStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPasswordResetStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPasswordResetStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
