import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponRootComponent } from './coupon-root.component';

describe('CouponRootComponent', () => {
  let component: CouponRootComponent;
  let fixture: ComponentFixture<CouponRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
