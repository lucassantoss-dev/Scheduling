import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatientService } from '../../../core/patient.service';
import { AlertService } from '../../../core/alert.service';
import { PatientApiInterface } from '../../../domain/model/patient/patient-api-interface';
import { PatientInterface } from '../../../domain/model/patient/patient-interface';
import { SubcategoryService } from '../../../core/subcategory.service';
import { SubcategoryApiInterface } from '../../../domain/model/subcategory/subcategory-api-interface';
import { SubcategoryInterface } from '../../../domain/model/subcategory/subcategory-interface';
import { PhysioterapistService } from '../../../core/physioterapist.service';
import { PhysioterapistInterface } from '../../../domain/model/physioterapist/physioterapist-interface';
import { PhysioterapistApiInterface } from '../../../domain/model/physioterapist/physioterapist-api-interface';
import { ScheduleService } from '../../../core/schedule.service';
import { ScheduleHourInterface } from '../../../domain/model/schedule/schedule-hour-interface';
import { ScheduleHourApiInterface } from '../../../domain/model/schedule/schedule-hour-api-interface';
import { CategoryService } from '../../../core/category.service';
import { CategoryApiInterface } from '../../../domain/model/category/category-api-interface';
import { CategoryInterface } from '../../../domain/model/category/category-interface';

@Component({
  selector: 'app-scheduling-form',
  templateUrl: './scheduling-form.component.html',
  styleUrl: './scheduling-form.component.scss'
})
export class SchedulingFormComponent implements OnInit {
  public horasDisponiveis: string[] = [];
  public hoursSchedule: ScheduleHourInterface[] = [];
  public formulario!: FormGroup;
  public patients: PatientInterface[] = [];
  public subcategories: SubcategoryInterface[] = [];
  public physios: PhysioterapistInterface[] = [];
  public patientExist: boolean = false;
  public patientNotExist: boolean = false;
  public additionalObservations: boolean = false;
  public hoursByDate: boolean = false;
  public categories: CategoryInterface[] = [];
  public categoryChanged: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SchedulingFormComponent>,
    private formBuilder: FormBuilder,
    private scheduleService: ScheduleService,
    private patientService: PatientService,
    private alertService: AlertService,
    private subcategoryService: SubcategoryService,
    private physioterapistService: PhysioterapistService,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getAllPatients();
    this.getAllSubcategories();
    this.getAllPhysioterapists();
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (categories: CategoryApiInterface) => {
        if (categories.data.length > 0) {
          this.categories = categories.data;
        }
      }, error: (error: Error) => {
        this.alertService.error('Ocorreu um erro', error.message);
      }
    })
  }

  getSubcategoryByCategory(): void {
    const formValue = Object.assign({}, this.formulario.getRawValue());
    this.subcategoryService.getSubcategoryByCategory(formValue.category).subscribe({
      next: (subcategory: SubcategoryApiInterface) => {
        if (subcategory.data.length > 0) {
          this.subcategories = subcategory.data;
          this.categoryChanged = true;
        }
      }, error: (error: Error) => {
        this.alertService.error('error', error.message);
      }
    })
  }

  getAllSubcategories(): void {
    this.subcategoryService.getAllSubcategory().subscribe({
      next: (subcategory: SubcategoryApiInterface) => {
        this.subcategories = subcategory.data;
      }, error: (error: Error) => {
        this.alertService.error('error', error.message);
      }
    })
  }

  getAllPatients(): void {
    this.patientService.getPatients().subscribe({
      next: (patient: PatientApiInterface) => {
        this.patients = patient.data;
      }, error: (error: Error) => {
        this.alertService.error('error', error.message);
      }
    })
  }

  getAllPhysioterapists(): void {
    this.physioterapistService.getAllPhysios().subscribe({
      next: (physio: PhysioterapistApiInterface) => {
        this.physios = physio.data;
      }, error: (error: Error) => {
        this.alertService.error('error', error.message);
      }
    })
  }

  getAvailableTimes(): void {
    const formValue = Object.assign({}, this.formulario.getRawValue());
    this.scheduleService.getScheduleHourByDate(formValue.date).subscribe({
      next: (hours: ScheduleHourApiInterface) => {
        if(hours.data[0]?.hour?.length > 0) {
          this.hoursByDate = true;
          this.horasDisponiveis = hours.data[0].hour;
        } else {
          this.hoursByDate = false;
        }
      }, error: (error: Error) => {
        console.error('Ocorreu um erro!', error.message);
      }
    })
  }

  patientExistInDb(): void {
    this.patientExist = true;
    this.patientNotExist = true;
  }

  patientNotExistInDb(): void {
    this.patientExist = false;
    this.patientNotExist = false;
  }

  onAdditionalInformations(): void {
    this.additionalObservations = true;
  }

  onCreateClick(): void {
    if (this.formulario.valid) {
      const formValue = Object.assign({}, this.formulario.getRawValue());
      this.scheduleService.createSchedule(formValue).subscribe({
        next: () => {
          this.alertService.success('Success', 'Reserva criada com sucesso!');
          this.dialogRef.close(formValue);
        }, error: (error: Error) => {
          this.alertService.error('Error', error.message);
        }
      })
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  private createForm(): void {
    this.formulario = this.formBuilder.group({
      patient: new FormControl({ value: '', disabled: false }, [Validators.required]),
      category: new FormControl({ value: '', disabled: false }, [Validators.required]),
      date: new FormControl({ disabled: false }, [Validators.required]),
      hour: new FormControl({ value: '', disabled: false }, [Validators.required]),
      physiotherapist: new FormControl({ value: '', disabled: false }, [Validators.required]),
      subcategory: new FormControl({ value: '', disabled: false }, [Validators.required]),
      additionalObservations: new FormControl({ value: '', disabled: false }),
      scheduleStatus: new FormControl({ value: false, disabled: false }, [Validators.required]),
    })
  }
}
