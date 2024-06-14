import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryInterface } from '../../../../../../domain/model/category/category-interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../../../../../core/category.service';
import { CategoryObjectApiInterface } from '../../../../../../domain/model/category/category-object-api-interface';
import { AlertService } from '../../../../../../core/alert.service';

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
	styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent implements OnInit {
	public categories: CategoryInterface[] = [];
	public formulario!: FormGroup;
	public typeForm: boolean = false;

	constructor(
		public dialogRef: MatDialogRef<CategoryFormComponent>,
		private formBuilder: FormBuilder,
		private categoryService: CategoryService,
		private alertService: AlertService,
		@Inject(MAT_DIALOG_DATA) public data: { id?: string, category?: CategoryInterface }
	) {

	}
	ngOnInit(): void {
		this.criarFormulario();
		if (this.data && this.data.category) {
			this.typeForm = true;
			this.preencherFormulario(this.data.category);
		} else if (this.data && this.data.id) {
			this.typeForm = false;
			this.getCategoryById(this.data.id);
		}
	}

	getCategoryById(id: string): void {
		this.categoryService.getCategoryById(id).subscribe({
			next: (category: CategoryObjectApiInterface) => {
				
			}, error: () => {
				this.alertService.error('erro', 'Ocorreu um erro ao visualizar por id!')
			}
		});
	}

	onCancelClick(): void {
		this.dialogRef.close();
	}

	onCreateClick(): void {
		if (this.formulario.valid) {
			if (this.data && this.data.id) {
				this.editCategory(this.data.id);
			} else {
				this.createCategory();
			}
		}
	}

	editCategory(id: string): void {
		if (this.formulario.valid) {
			const formvalue = Object.assign({}, this.formulario.getRawValue());
			this.categoryService.editCategory(id, formvalue).subscribe({
				next: () => {
					this.alertService.success('Sucesso', 'Categoria editada com sucesso!');
					setTimeout(() => {
						this.dialogRef.close();
					}, 500);
				}, error: () => {
					this.alertService.error('erro', 'Ocorreu um erro ao editar!')
				}
			})
		}
	}

	createCategory(): void {
		if (this.formulario.valid) {
			const formvalue = Object.assign({}, this.formulario.getRawValue());
			this.categoryService.createCategory(formvalue).subscribe({
				next: () => {
					this.alertService.success('Sucesso', 'Categoria criada com sucesso!');
					setTimeout(() => {
						this.dialogRef.close();
					}, 500);
				}, error: () => {
					this.alertService.error('erro', 'Ocorreu um erro ao criar!')
				}
			})
		}
	}

	private preencherFormulario(category: CategoryInterface): void {
		this.formulario.patchValue(category);
	}

	private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			category_name: new FormControl({ value: '', disabled: false }, [Validators.required]),
			description: new FormControl({ value: '', disabled: false }, [Validators.required])
		});
	};
}
