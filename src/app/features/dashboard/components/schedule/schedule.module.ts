import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleViewComponent } from './view/schedule-view.component';
import { ScheduleFormComponent } from './form/schedule-form.component';
import { MaterialModule } from '../../../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    ScheduleViewComponent,
    ScheduleFormComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ScheduleModule { }
