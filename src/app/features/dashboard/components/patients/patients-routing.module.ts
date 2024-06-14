import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientViewComponent } from './patient/view/patient-view.component';
import { EvolutionViewComponent } from './evolution/view/evolution-view.component';
import { TokenViewComponent } from './token/view/token-view.component';
import { ConsentViewComponent } from './consent/view/consent-view.component';
import { CategoryViewComponent } from './category/view/category-view.component';
import { TokenFormComponent } from './token/form/token-form.component';
import { MotorAssessmentFormComponent } from './token/components/motor-assessment-form/motor-assessment-form.component';
import { CardiopulmonaryAssessmentFormComponent } from './token/components/cardiopulmonary-assessment-form/cardiopulmonary-assessment-form.component';
import { PatientDetailComponent } from './patient/detail/patient-detail.component';
import { SchedulingViewComponent } from '../../../../shared/scheduling/view/scheduling-view.component';

const routes: Routes = [
  {
    path: 'patient',
    component: PatientViewComponent
  },
  {
    path: 'patient/detail/:id',
    component: PatientDetailComponent
  },
  {
    path: 'evolution',
    component: EvolutionViewComponent
  },
  {
    path: 'token',
    component: TokenViewComponent
  },
  {
    path: 'consent',
    component: ConsentViewComponent
  },
  {
    path: 'create-token',
    component: TokenFormComponent
  },
  {
    path: 'create-token/motor-assesment',
    component: MotorAssessmentFormComponent
  },
  {
    path: 'create-token/cardiopulmonary-assessment',
    component: CardiopulmonaryAssessmentFormComponent
  },
  {
    path: 'category',
    component: CategoryViewComponent
  },
  {
    path: 'schedule',
    component: SchedulingViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
