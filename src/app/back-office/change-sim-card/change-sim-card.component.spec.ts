import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSimCardComponent } from './change-sim-card.component';

describe('ChangeSimCardComponent', () => {
  let component: ChangeSimCardComponent;
  let fixture: ComponentFixture<ChangeSimCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSimCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSimCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
