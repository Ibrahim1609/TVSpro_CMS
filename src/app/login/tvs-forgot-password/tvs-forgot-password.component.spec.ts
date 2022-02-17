import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsForgotPasswordComponent } from './tvs-forgot-password.component';

describe('TvsForgotPasswordComponent', () => {
  let component: TvsForgotPasswordComponent;
  let fixture: ComponentFixture<TvsForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
