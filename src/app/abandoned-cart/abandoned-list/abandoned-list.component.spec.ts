import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonedListComponent } from './abandoned-list.component';

describe('AbandonedListComponent', () => {
  let component: AbandonedListComponent;
  let fixture: ComponentFixture<AbandonedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbandonedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbandonedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
