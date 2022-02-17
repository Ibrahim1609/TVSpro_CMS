import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimRootComponent } from './claim-root.component';

describe('ClaimRootComponent', () => {
  let component: ClaimRootComponent;
  let fixture: ComponentFixture<ClaimRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
