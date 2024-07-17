import { Component, Inject, OnInit } from '@angular/core';
import { AlertService } from '../../../../../core/alert.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PhysioterapistInterface } from '../../../../../domain/model/physioterapist/physioterapist-interface';
import { PhysioterapistService } from '../../../../../core/physioterapist.service';
import { PhysioterapistApiInterface } from '../../../../../domain/model/physioterapist/physioterapist-api-interface';
import { ScheduleService } from '../../../../../core/schedule.service';
import { ScheduleHourInterface } from '../../../../../domain/model/schedule/schedule-hour-interface';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {
  public formulario!: FormGroup;
  public typeForm: boolean = false;
  public physios: PhysioterapistInterface[] = [];

  constructor(
    public dialogRef: MatDialogRef<ScheduleFormComponent>,
    private formBuilder: FormBuilder,
    private physioterapistService: PhysioterapistService,
    private scheduleService: ScheduleService,
    private alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: { id?: string, category?: any }
  ) { }

  ngOnInit(): void {
    this.getAllPhysioterapists();
    this.criarFormulario();
    if (this.data && this.data.category) {
      this.typeForm = true;
      this.preencherFormulario(this.data.category);
    } else if (this.data && this.data.id) {
      this.typeForm = false;
    }
  }

  getAllPhysioterapists(): void {
    this.physioterapistService.getAllPhysios().subscribe({
      next: (physio: PhysioterapistApiInterface) => {
        this.physios = physio.data;
      },
      error: (error: Error) => {
        this.alertService.error('error', error.message);
      }
    });
  }

  onCreateClick(): void {
    if (this.formulario.valid) {
      if (this.data && this.data.id) {
        // Chamar método de edição
      } else {
        this.createHours();
      }
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  createHours(): void {
    if (this.formulario.valid) {
      const formvalue = Object.assign({}, this.formulario.getRawValue());
      const payload: ScheduleHourInterface = {
        date: formvalue.date,
        physiotherapist: formvalue.physiotherapist,
        hour: formvalue.hour.map((hour: any) => hour.time)
      }
      this.scheduleService.createScheduleHour(payload).subscribe({
        next: () => {
          this.alertService.success('Sucess', 'Hora adicionada com sucesso!');
          this.dialogRef.close();
        }, error: (error: Error) => {
          this.alertService.error('Ocorreu um erro!', error.message);
        }
      })
    }
  }

  private preencherFormulario(category: any): void {
    this.formulario.patchValue({
      date: category.date,
      physiotherapist: category.physiotherapist
    });
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      date: new FormControl('', [Validators.required]),
      hour: this.formBuilder.array([]),
      physiotherapist: new FormControl('', [Validators.required])
    });
  }

  get hour(): FormArray {
    return this.formulario.get('hour') as FormArray;
  }

  addHour(): void {
    this.hour.push(this.formBuilder.group({
      time: ['', Validators.required]
    }));
  }

  removeHour(index: number): void {
    this.hour.removeAt(index);
  }
}
