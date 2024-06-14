import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './modal/confirmation-modal/confirmation-modal.component';
import { MaterialModule } from '../material-module';
import { SchedulingFormComponent } from './scheduling/scheduling-form/scheduling-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingViewComponent } from './scheduling/view/scheduling-view.component';



@NgModule({
  declarations: [
    ConfirmationModalComponent,
    SchedulingFormComponent,
    SchedulingViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ConfirmationModalComponent,
    SchedulingViewComponent
  ]
})
export class SharedModule { }
