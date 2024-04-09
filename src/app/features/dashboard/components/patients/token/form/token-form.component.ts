import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../../../../../core/patient.service';

@Component({
	selector: 'app-token-form',
	templateUrl: './token-form.component.html',
	styleUrl: './token-form.component.scss'
})
export class TokenFormComponent implements OnInit {
	public patientDataExpanded: boolean = true;
	public tokenDataExpanded: boolean = true;
	public formulario!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
	) {

	}

	ngOnInit(): void {
		this.criarFormulario();
	}

	togglePatient() {
		this.patientDataExpanded = !this.patientDataExpanded;
	}

	toggleToken() {
		this.tokenDataExpanded = !this.tokenDataExpanded;
	}

	private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			name: new FormControl({ value: '', disabled: false }, [Validators.required]),
			age: new FormControl({ disabled: false }, [Validators.required]),
			address: new FormControl({ value: '', disabled: false }, [Validators.required]),
			date_of_birth: new FormControl({ value: '', disabled: false }, [Validators.required])
		});
	}
}
