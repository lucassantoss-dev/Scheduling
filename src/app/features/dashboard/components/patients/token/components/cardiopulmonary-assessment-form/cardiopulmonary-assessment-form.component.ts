import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-cardiopulmonary-assessment-form',
	templateUrl: './cardiopulmonary-assessment-form.component.html',
	styleUrl: './cardiopulmonary-assessment-form.component.scss'
})
export class CardiopulmonaryAssessmentFormComponent implements OnInit {
	public formulario!: FormGroup;
	public firstScreen: boolean = true;
	public others: boolean = true;
	public oxygenTherapy: boolean = false;
	constructor(
		private formBuilder: FormBuilder,
	) {

	}
	ngOnInit(): void {
		this.criarFormulario();
	}

	nextStep() {
		this.firstScreen = false;
	}

	createAssessment(): void {
		const formvalue = Object.assign({}, this.formulario.getRawValue());
		console.log('formValue', formvalue);
	}

	backStep() {
		this.firstScreen = true;
	}

	private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			static_inspection: new FormControl({ value: '', disabled: false }, [Validators.required]),
			pa: new FormControl({ value: '', disabled: false }, [Validators.required]),
			fc: new FormControl({ value: '', disabled: false }, [Validators.required]),
			f: new FormControl({ value: '', disabled: false }, [Validators.required]),
			weight: new FormControl({ value: '', disabled: false }, [Validators.required]),
			height: new FormControl({ value: '', disabled: false }, [Validators.required]),
			breathing_rhythm: new FormControl({ value: '', disabled: false }, [Validators.required]),
			secretion: new FormControl({ value: '', disabled: false }, [Validators.required]),
			imc: new FormControl({ value: '', disabled: false }, [Validators.required]),
			sat: new FormControl({ value: '', disabled: false }, [Validators.required]),
			hydration: new FormControl({ value: '', disabled: false }, [Validators.required]),
			cyanosis: new FormControl({ value: '', disabled: false }, [Validators.required]),
			perfusion: new FormControl({ value: '', disabled: false }, [Validators.required]),
			jaundice: new FormControl({ value: '', disabled: false }, [Validators.required]),
			entry_way: new FormControl({ value: '', disabled: false }, [Validators.required]),
			breathing_pattern: new FormControl({ value: '', disabled: false }, [Validators.required]),
			breathing_range: new FormControl({ value: '', disabled: false }, [Validators.required]),
			inspiration_exhalation: new FormControl({ value: '', disabled: false }, [Validators.required]),
			cough: new FormControl({ value: '', disabled: false }, [Validators.required]),
			cough_second: new FormControl({ value: '', disabled: false }, [Validators.required]),
			lung_auscultation: new FormControl({ value: '', disabled: false }, [Validators.required]),
			obs: new FormControl({ value: '', disabled: false }, [Validators.required]),
			chest_shape: new FormControl({ value: '', disabled: false }, [Validators.required]),
			others: new FormControl({ value: '', disabled: false }, [Validators.required]),
			oxygenTherapy: new FormControl({ value: '', disabled: false }, [Validators.required]),
			ventilationType: new FormControl({ value: '', disabled: false }, [Validators.required]),
		});
	}
}
