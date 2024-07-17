import { Component, Inject, OnInit } from '@angular/core';
import { CategoryInterface } from '../../../../../../domain/model/category/category-interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertService } from '../../../../../../core/alert.service';
import { CategoryService } from '../../../../../../core/category.service';
import { CategoryApiInterface } from '../../../../../../domain/model/category/category-api-interface';
import { error } from 'console';
import { SubcategoryService } from '../../../../../../core/subcategory.service';
import { SubcategoryObjectApiInterface } from '../../../../../../domain/model/subcategory/subcategory-object-api-interface';

@Component({
    selector: 'app-subcategory-form',
    templateUrl: './subcategory-form.component.html',
    styleUrl: './subcategory-form.component.scss'
})
export class SubcategoryFormComponent implements OnInit {
    public categories: CategoryInterface[] = [];
    public formulario!: FormGroup;
    public typeForm: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<SubcategoryFormComponent>,
        private formBuilder: FormBuilder,
        private categoryService: CategoryService,
        private subcategoryService: SubcategoryService,
        private alertService: AlertService,
        @Inject(MAT_DIALOG_DATA) public data: { id?: string, category?: CategoryInterface }
    ) {

    }

    ngOnInit(): void {
        this.getAllCategories();
        this.criarFormulario();
        if (this.data && this.data.category) {
            this.typeForm = true;
            this.preencherFormulario(this.data.category);
        } else if (this.data && this.data.id) {
            this.typeForm = false;
            this.getSubcategoryById(this.data.id);
        }
    }

    getAllCategories(): void {
        this.categoryService.getAllCategories().subscribe({
            next: (category: CategoryApiInterface) => {
                this.categories = category.data;
            }, error: (error: Error) => {
                this.alertService.error('error', error.message);
            }
        })
    }

    getSubcategoryById(id: string): void {
        this.subcategoryService.getSubcategoryById(id).subscribe({
            next: (data: SubcategoryObjectApiInterface) => {
            }, error: () => {

            }
        });
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    onCreateClick(): void {
        if (this.formulario.valid) {
            if (this.data && this.data.id) {
                this.editSubcategory(this.data.id);
            } else {
                this.createSubcategory();
            }
        }
    }

    createSubcategory(): void {

    }

    editSubcategory(id: string): void {

    }

    private preencherFormulario(category: CategoryInterface): void {
        this.formulario.patchValue(category);
    }

    private criarFormulario(): void {
        this.formulario = this.formBuilder.group({
            category: new FormControl({ value: '', disabled: false }, [Validators.required]),
            subcategory: new FormControl({ value: '', disabled: false }, [Validators.required])
        });
    };
}
