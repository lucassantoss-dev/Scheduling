import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubcategoryFormComponent } from '../form/subcategory-form.component';
import { SubcategoryService } from '../../../../../../core/subcategory.service';
import { SubcategoryApiInterface } from '../../../../../../domain/model/subcategory/subcategory-api-interface';
import { SubcategoryInterface } from '../../../../../../domain/model/subcategory/subcategory-interface';
import { CategoryService } from '../../../../../../core/category.service';
import { CategoryObjectApiInterface } from '../../../../../../domain/model/category/category-object-api-interface';
import { CategoryApiInterface } from '../../../../../../domain/model/category/category-api-interface';

@Component({
  selector: 'app-subcategory-view',
  templateUrl: './subcategory-view.component.html',
  styleUrl: './subcategory-view.component.scss'
})
export class SubcategoryViewComponent implements OnInit {
  loading: boolean = false;
  subcategories: SubcategoryInterface[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ["name", "description", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    public dialog: MatDialog,
    private subcategoryService: SubcategoryService,
    private categoryService: CategoryService,
  ) {
  }

  ngOnInit(): void {
    this.getAllSubcategories();
  }

  Filterchange(data: Event): void {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  getAllSubcategories(): void {
    this.loading = true;
    this.subcategoryService.getAllSubcategory().subscribe({
      next: (subcategories: SubcategoryApiInterface) => {
        setTimeout(() => {
					this.dataSource = new MatTableDataSource<SubcategoryInterface>(subcategories.data);
					this.loading = false;
				}, 600);
      }, error: () => {

      }
    })
  }

  createHour(): void {
    const dialogRef = this.dialog.open(SubcategoryFormComponent, {
      width: '900px',
      height: '250px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
