import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-motor-assessment-form',
	templateUrl: './motor-assessment-form.component.html',
	styleUrl: './motor-assessment-form.component.scss'
})
export class MotorAssessmentFormComponent implements OnInit {
	public formulario!: FormGroup;
	constructor(
		private formBuilder: FormBuilder,
	) {

	}
	ngOnInit(): void {
		this.criarFormulario();
	}

	private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			static_inspection: new FormControl({ value: '', disabled: false }, [Validators.required]),
		});
	}
}
