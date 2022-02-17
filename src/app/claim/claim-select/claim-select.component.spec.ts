import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimSelectComponent } from './claim-select.component';

describe('ClaimSelectComponent', () => {
  let component: ClaimSelectComponent;
  let fixture: ComponentFixture<ClaimSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
