import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingViewComponent } from './scheduling-view.component';

describe('SchedulingViewComponent', () => {
  let component: SchedulingViewComponent;
  let fixture: ComponentFixture<SchedulingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulingViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchedulingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
