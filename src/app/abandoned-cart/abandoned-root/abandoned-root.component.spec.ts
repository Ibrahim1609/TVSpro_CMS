import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonedRootComponent } from './abandoned-root.component';

describe('AbandonedRootComponent', () => {
  let component: AbandonedRootComponent;
  let fixture: ComponentFixture<AbandonedRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbandonedRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbandonedRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
