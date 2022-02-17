import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonedSelectComponent } from './abandoned-select.component';

describe('AbandonedSelectComponent', () => {
  let component: AbandonedSelectComponent;
  let fixture: ComponentFixture<AbandonedSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbandonedSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbandonedSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
