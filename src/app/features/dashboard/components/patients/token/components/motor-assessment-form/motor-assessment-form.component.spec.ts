import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorAssessmentFormComponent } from './motor-assessment-form.component';
import { MaterialModule } from '../../../../../../../material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../../../../shared/shared.module';
import { LoginFormComponent } from '../../../../../../login/components/login-form/login-form.component';
import { ConfirmationModalComponent } from '../../../../../../../shared/modal/confirmation-modal/confirmation-modal.component';

describe('MotorAssessmentFormComponent', () => {
  let component: MotorAssessmentFormComponent;
  let fixture: ComponentFixture<MotorAssessmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotorAssessmentFormComponent],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        SharedModule
      ]
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
