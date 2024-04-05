import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './modal/confirmation-modal/confirmation-modal.component';
import { MaterialModule } from '../material-module';



@NgModule({
  declarations: [
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ConfirmationModalComponent
  ]
})
export class SharedModule { }
