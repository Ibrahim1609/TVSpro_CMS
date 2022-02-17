import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionlayoutComponent } from './sessionlayout.component';

describe('SessionlayoutComponent', () => {
  let component: SessionlayoutComponent;
  let fixture: ComponentFixture<SessionlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
