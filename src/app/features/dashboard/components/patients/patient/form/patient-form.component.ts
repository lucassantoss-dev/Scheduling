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
		@Inject(MAT_DIALOG_DATA) public data: { id?: string, patient?: PatientInterface }
	) {

	}

	ngOnInit(): void {
		this.criarFormulario();

		if (this.data && this.data.patient) {
			this.typeForm = true;
			this.preencherFormulario(this.data.patient);
		} else if (this.data && this.data.id) {
			this.typeForm = false;
			this.getPatientById(this.data.id);
		}
	}

	getPatientById(id: string): void {
		this.patientService.getPatientsById(id).subscribe({
			next: () => {

			}, error: (error: Error) => {
			}
		})
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
		const formvalue = Object.assign({}, this.formulario.getRawValue());
		this.patientService.createPatient(formvalue).subscribe({
			next: () => {
				console.log('criado com sucesso!');
				this.dialogRef.close();
			}, error: (error: Error) => {
				console.error('Ocorreu um erro!', error.message);
			}
		})
	}

	editPatient(id: string): void {
		if(this.formulario.valid) {
			const formvalue = Object.assign({}, this.formulario.getRawValue());
			this.patientService.updatePatient(id, formvalue).subscribe({
				next: () => {
					console.log('editado com sucesso!');
					this.dialogRef.close();
				}, error: (error: Error) => {
					console.error('Ocorreu um erro!', error.message);
				}
			})
		}
	}

	private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			name: new FormControl({ value: '', disabled: false }),
			age: new FormControl({ disabled: false }),
			address: new FormControl({ value: '', disabled: false }),
			date_of_birth: new FormControl({ value: '', disabled: false }),
			education: new FormControl({ value: '', disabled: false }),
			profession: new FormControl({ value: '', disabled: false }),
			marital_status: new FormControl({ value: '', disabled: false }),
			phone_number: new FormControl({ value: '', disabled: false }),
			emergency_contact: new FormControl({ value: '', disabled: false }),
			address_number: new FormControl({ disabled: false }),
			ethnicity: new FormControl({ value: '', disabled: false }),
			children: new FormControl({ value: false, disabled: false }),
			many: new FormControl({ disabled: false }),
			naturalness: new FormControl({ value: '', disabled: false }),
			email: new FormControl({ value: '', disabled: false }),
			height: new FormControl({ value: '', disabled: false }),
			weight: new FormControl({ value: '', disabled: false }),
			complement: new FormControl({ value: '', disabled: false }),
			province: new FormControl({ value: '', disabled: false }),
			city: new FormControl({ value: '', disabled: false }),
			uf: new FormControl({ value: '', disabled: false }),
			postal_code: new FormControl({ value: '', disabled: false }),
			sex: new FormControl({ value: '', disabled: false })
		});
	};

	private preencherFormulario(patient: PatientInterface): void {
		this.formulario.patchValue(patient);
	}
}
