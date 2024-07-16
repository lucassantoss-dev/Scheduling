import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleViewComponent } from './view/schedule-view.component';
import { ScheduleFormComponent } from './form/schedule-form.component';

const routes: Routes = [
  {
    path: 'hours',
    component: ScheduleViewComponent
  },
  {
    path: 'create-schedule-hours',
    component: ScheduleFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
