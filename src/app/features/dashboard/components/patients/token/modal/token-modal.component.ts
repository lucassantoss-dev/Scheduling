import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from '../../../../../../core/patient.service';
import { PatientApiInterface } from '../../../../../../domain/model/patient/patient-api-interface';
import { PatientInterface } from '../../../../../../domain/model/patient/patient-interface';

@Component({
	selector: 'app-token-modal',
	templateUrl: './token-modal.component.html',
	styleUrl: './token-modal.component.scss'
})
export class TokenModalComponent implements OnInit {
	public persons: PatientInterface[] = []
	public formulario!: FormGroup;
	public typeForm: boolean = false;
	public showFirstScreen = true;
	public showButton = false;

	constructor(
		public dialogRef: MatDialogRef<TokenModalComponent>,
		private formBuilder: FormBuilder,
		private router: Router,
		private patientService: PatientService,
		@Inject(MAT_DIALOG_DATA) public data: { id?: string, category?: any }
	) {

	}

	ngOnInit(): void {
		this.criarFormulario();
		this.getAllPatients();
	}

	getAllPatients(): void {
		this.patientService.getPatients().subscribe({
			next: (patients: PatientApiInterface) => {
				this.persons = patients.data;
			}, error: (error: Error) => {
				console.error('error', error);
			}
		})
	}

	onFileSelected(event: any) {
		const selectedFile = event.target.files[0];
	}

	triggerFileInput() {
		document.getElementById('file-upload')?.click();
	}


	onCancelClick(): void {
		this.dialogRef.close();
	}

	onCreateClick(): void {
		if(this.formulario.valid) {
			const formvalue = Object.assign({}, this.formulario.getRawValue());
			const url = `/dashboard/patients/create-token/${formvalue.plugType}`
			this.router.navigate([url])
			this.dialogRef.close();
			if (this.formulario.valid) {
				if (this.data && this.data.id) {
				} else {
				}
			}
		} else {
			Object.keys(this.formulario.controls).forEach(field => {
				const control = this.formulario.get(field);
				control?.markAsTouched({ onlySelf: true });
			});
		}
	}

	selectMedicalRequirement(value: string): void {
		this.formulario.get('medicalRequirement')?.setValue(value);
		if (value === 'com') {
			this.showButton = true;
		}
		if (value === 'sem') {
			this.showButton = false;
		}
	}

	isMedicalRequirementSelected(value: string): boolean {
		return this.formulario.get('medicalRequirement')?.value === value;
	}

	selectedPlugType(value: string): boolean {
		return this.formulario.get('plugType')?.value === value;
	}

	selectPlugType(value: string): void {
		this.formulario.get('plugType')?.setValue(value);
	}

	nextStep() {
		if (this.formulario.controls['medicalRequirement'].valid && this.formulario.controls['client'].valid && this.formulario.controls['professional'].valid) {
			this.showFirstScreen = false;
		} else {
			Object.keys(this.formulario.controls).forEach(field => {
				const control = this.formulario.get(field);
				control?.markAsTouched({ onlySelf: true });
			});
		}
	}

	backStep() {
		this.showFirstScreen = true;
	}

	private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			professional: new FormControl({ value: '', disabled: false }, [Validators.required]),
			client: new FormControl({ value: '', disabled: false }, [Validators.required]),
			medicalRequirement: new FormControl({ value: '', disabled: false }, [Validators.required]),
			plugType: new FormControl({ value: '', disabled: false }, [Validators.required]),
		});
	}
}
