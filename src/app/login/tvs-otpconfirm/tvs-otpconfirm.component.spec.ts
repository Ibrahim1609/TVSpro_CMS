import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsOTPConfirmComponent } from './tvs-otpconfirm.component';

describe('TvsOTPConfirmComponent', () => {
  let component: TvsOTPConfirmComponent;
  let fixture: ComponentFixture<TvsOTPConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsOTPConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsOTPConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
