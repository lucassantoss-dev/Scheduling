import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { MaterialModule } from '../../../../material-module';
import { PatientViewComponent } from './patient/view/patient-view.component';
import { PatientFormComponent } from './patient/form/patient-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { CategoryViewComponent } from './category/view/category-view.component';
import { TokenViewComponent } from './token/view/token-view.component';
import { TokenFormComponent } from './token/form/token-form.component';
import { TokenModalComponent } from './token/modal/token-modal.component';
import { MotorAssessmentFormComponent } from './token/components/motor-assessment-form/motor-assessment-form.component';
import { CardiopulmonaryAssessmentFormComponent } from './token/components/cardiopulmonary-assessment-form/cardiopulmonary-assessment-form.component';
import { PatientDetailComponent } from './patient/detail/patient-detail.component';
import { CategoryFormComponent } from './category/form/category-form.component';
import { SubcategoryViewComponent } from './subcategory/view/subcategory-view.component';
import { SubcategoryFormComponent } from './subcategory/form/subcategory-form.component';


@NgModule({
  declarations: [
    PatientViewComponent,
    PatientFormComponent,
    CategoryViewComponent,
    TokenViewComponent,
    TokenFormComponent,
    TokenModalComponent,
    MotorAssessmentFormComponent,
    CardiopulmonaryAssessmentFormComponent,
    PatientDetailComponent,
    CategoryFormComponent,
    SubcategoryViewComponent,
    SubcategoryFormComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PatientsModule { }
