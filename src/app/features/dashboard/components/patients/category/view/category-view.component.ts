import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../../../../../core/category.service';
import { CategoryApiInterface } from '../../../../../../domain/model/category/category-api-interface';
import { CategoryInterface } from '../../../../../../domain/model/category/category-interface';
import { CategoryFormComponent } from '../form/category-form.component';
import { ConfirmationModalComponent } from '../../../../../../shared/modal/confirmation-modal/confirmation-modal.component';
import { AlertService } from '../../../../../../core/alert.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-category-view',
	templateUrl: './category-view.component.html',
	styleUrl: './category-view.component.scss'
})
export class CategoryViewComponent implements OnInit {
	loading: boolean = false;
	dataSource!: MatTableDataSource<CategoryInterface>;
	displayedColumns: string[] = ["name", "description", "action"];
	@ViewChild(MatPaginator) paginatior !: MatPaginator;
	@ViewChild(MatSort) sort !: MatSort;

	constructor(
		public dialog: MatDialog,
		private categoryService: CategoryService,
		private alertService: AlertService,
		private router: Router
	) {
	}

	ngOnInit(): void {
		this.getAllCategories();
	}

	Filterchange(data: Event): void {
		const value = (data.target as HTMLInputElement).value;
		this.dataSource.filter = value;
	}

	getAllCategories(): void {
		this.loading = true;
		this.categoryService.getAllCategories().subscribe({
			next: (category: CategoryApiInterface) => {
				setTimeout(() => {
					this.dataSource = new MatTableDataSource<CategoryInterface>(category.data);
					this.loading = false;
				}, 600);
			}, error: () => {
				this.loading = false;
				this.alertService.error('Erro', 'Por favor, faça login novamente!');
				setTimeout(() => {
					const url = '/login';
					this.router.navigate([url]);
				}, 1000);
			}
		})
	}

	createCategory(): void {
		const dialogRef = this.dialog.open(CategoryFormComponent, {
			width: '800px',
			height: '200px'
		});

		dialogRef.afterClosed().subscribe(result => {
			this.getAllCategories();
		});
	}

	editCategory(id: string, data: CategoryInterface): void {
		const dialogRef = this.dialog.open(CategoryFormComponent, {
			width: '800px',
			height: '200px',
			data: { id: id, category: data },
		});

		dialogRef.afterClosed().subscribe(result => {
			setTimeout(() => {
				this.getAllCategories();
			}, 500);
		});
	}

	deleteCategory(id: string): void {
		const dialogRef = this.dialog.open(ConfirmationModalComponent, {
			width: '300px',
			data: { title: 'Confirmação', message: 'Deseja realmente excluir?' }
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.categoryService.deleteCategory(id).subscribe({
					next: () => {
						this.getAllCategories();
					}, error: (err: Error) => {
						this.alertService.error('erro', 'Ocorreu um erro ao deletar!')
					}
				})
			}
		});
	}
}
