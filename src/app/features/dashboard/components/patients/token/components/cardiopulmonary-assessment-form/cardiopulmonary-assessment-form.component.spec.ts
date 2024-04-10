import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiopulmonaryAssessmentFormComponent } from './cardiopulmonary-assessment-form.component';

describe('CardiopulmonaryAssessmentFormComponent', () => {
  let component: CardiopulmonaryAssessmentFormComponent;
  let fixture: ComponentFixture<CardiopulmonaryAssessmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardiopulmonaryAssessmentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardiopulmonaryAssessmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
