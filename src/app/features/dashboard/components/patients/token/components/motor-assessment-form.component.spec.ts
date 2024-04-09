import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorAssessmentFormComponent } from './motor-assessment-form.component';

describe('MotorAssessmentFormComponent', () => {
  let component: MotorAssessmentFormComponent;
  let fixture: ComponentFixture<MotorAssessmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorAssessmentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorAssessmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
