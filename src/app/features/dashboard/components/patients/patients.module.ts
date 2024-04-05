import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { MaterialModule } from '../../../../material-module';
import { PatientViewComponent } from './patient/view/patient-view.component';
import { PatientFormComponent } from './patient/form/patient-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    PatientViewComponent,
    PatientFormComponent
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
