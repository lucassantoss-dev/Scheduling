import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../../../../../core/category.service';
import { CategoryApiInterface } from '../../../../../../domain/model/category/category-api-interface';
import { CategoryInterface } from '../../../../../../domain/model/category/category-interface';

@Component({
	selector: 'app-category-view',
	templateUrl: './category-view.component.html',
	styleUrl: './category-view.component.scss'
})
export class CategoryViewComponent implements OnInit {
	loading: boolean = false;
	dataSource!: MatTableDataSource<CategoryInterface>;
	displayedColumns: string[] = ["image", "name", "description", "action"];
	@ViewChild(MatPaginator) paginatior !: MatPaginator;
	@ViewChild(MatSort) sort !: MatSort;

	constructor(
		public dialog: MatDialog,
		private categoryService: CategoryService
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
		this.categoryService.getCategory().subscribe({
			next: (category: CategoryApiInterface) => {
				this.dataSource = new MatTableDataSource<CategoryInterface>(category.data);
			}
		})
	}

	createCategory(): void {
		
	}

	editCategory(id: string, data: CategoryInterface): void {

	}

	deleteCategory(id: string): void {

	}
}