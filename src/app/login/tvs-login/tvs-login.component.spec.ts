import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsLoginComponent } from './tvs-login.component';

describe('TvsLoginComponent', () => {
  let component: TvsLoginComponent;
  let fixture: ComponentFixture<TvsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
