import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientViewComponent } from './patient/view/patient-view.component';
import { EvolutionViewComponent } from './evolution/view/evolution-view.component';
import { TokenViewComponent } from './token/view/token-view.component';
import { ConsentViewComponent } from './consent/view/consent-view.component';

const routes: Routes = [
  {
    path: 'patient',
    component: PatientViewComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }