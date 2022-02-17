import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationlayoutComponent } from './applicationlayout.component';

describe('ApplicationlayoutComponent', () => {
  let component: ApplicationlayoutComponent;
  let fixture: ComponentFixture<ApplicationlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
