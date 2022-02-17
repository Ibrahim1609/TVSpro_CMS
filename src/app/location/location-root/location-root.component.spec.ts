import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRootComponent } from './location-root.component';

describe('LocationRootComponent', () => {
  let component: LocationRootComponent;
  let fixture: ComponentFixture<LocationRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
