import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { MaterialModule } from '../../../../material-module';
import { PatientViewComponent } from './patient/view/patient-view.component';


@NgModule({
  declarations: [
    PatientViewComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MaterialModule
  ]
})
export class PatientsModule { }
