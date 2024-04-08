import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-token-modal',
  templateUrl: './token-modal.component.html',
  styleUrl: './token-modal.component.scss'
})
export class TokenModalComponent implements OnInit {
  public persons: [] = []
	public formulario!: FormGroup;
	public typeForm: boolean = false;

	constructor(
		public dialogRef: MatDialogRef<TokenModalComponent>,
		private formBuilder: FormBuilder,
		@Inject(MAT_DIALOG_DATA) public data: { id?: string, category?: any }
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
			} else {
			}
		}
	}

  selectMedicalRequirement(value: string): void {
    this.formulario.get('medicalRequirement')?.setValue(value);
  }

  isMedicalRequirementSelected(value: string): boolean {
    return this.formulario.get('medicalRequirement')?.value === value;
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
			sex: new FormControl({ value: '', disabled: false }, [Validators.required]),
			medicalRequirement: new FormControl({ value: '', disabled: false }, [Validators.required])
		});
	}
}
