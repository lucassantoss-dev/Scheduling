import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-cardiopulmonary-assessment-form',
	templateUrl: './cardiopulmonary-assessment-form.component.html',
	styleUrl: './cardiopulmonary-assessment-form.component.scss'
})
export class CardiopulmonaryAssessmentFormComponent implements OnInit {
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
			pa: new FormControl({ value: '', disabled: false }, [Validators.required]),
			fc: new FormControl({ value: '', disabled: false }, [Validators.required]),
			f: new FormControl({ value: '', disabled: false }, [Validators.required]),
			weight: new FormControl({ value: '', disabled: false }, [Validators.required]),
		});
	}
}
