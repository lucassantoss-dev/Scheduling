import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatientService } from '../../../../../../core/patient.service';
import { PatientInterface } from '../../../../../../domain/model/patient/patient-interface';

@Component({
	selector: 'app-patient-form',
	templateUrl: './patient-form.component.html',
	styleUrl: './patient-form.component.scss'
})
export class PatientFormComponent implements OnInit {
	public patients: PatientInterface[] = [];
	public formulario!: FormGroup;
	public typeForm: boolean = false;

	constructor(
		public dialogRef: MatDialogRef<PatientFormComponent>,
		private formBuilder: FormBuilder,
		private patientService: PatientService,
		@Inject(MAT_DIALOG_DATA) public data: { id?: string, category?: PatientInterface }
	) {

	}

	ngOnInit(): void {
		this.criarFormulario();
	}

	onCancelClick(): void {
		this.dialogRef.close();
	}

	onCreateClick(): void {
		if (this.formulario.valid) {
			if (this.data && this.data.id) {
				this.editPatient(this.data.id);
			} else {
				this.createPatient();
			}
		}
	}

	createPatient(): void {
		if(this.formulario.valid) {
			const formvalue = Object.assign({}, this.formulario.getRawValue());
			this.patientService.createPatient(formvalue).subscribe({
				next: () => {
					console.log('criado com sucesso!');
				}, error: (error: Error) => {
					console.error('Ocorreu um erro!', error.message);
				}
			})
		}
	}

	editPatient(id: string): void {
		if(this.formulario.valid) {
			console.log('edit?')
		}
	}

	private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			name: new FormControl({ value: '', disabled: false }, [Validators.required]),
			age: new FormControl({ disabled: false }, [Validators.required]),
			address: new FormControl({ value: '', disabled: false }, [Validators.required]),
			date_of_birth: new FormControl({ value: '', disabled: false }, [Validators.required]),
			education: new FormControl({ value: '', disabled: false }, [Validators.required]),
			profession: new FormControl({ value: '', disabled: false }, [Validators.required]),
			marital_status: new FormControl({ value: '', disabled: false }, [Validators.required]),
			phone: new FormControl({ disabled: false }, [Validators.required]),
			emergency_contact: new FormControl({ disabled: false }, [Validators.required]),
			ethnicity: new FormControl({ value: '', disabled: false }, [Validators.required]),
			children: new FormControl({ value: false, disabled: false }, [Validators.required]),
			many: new FormControl({ disabled: false }, [Validators.required]),
			naturalness: new FormControl({ value: '', disabled: false }, [Validators.required]),
			sex: new FormControl({ value: '', disabled: false }, [Validators.required])
		});
	}
}
