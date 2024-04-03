import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrl: './patient-view.component.scss'
})
export class PatientViewComponent implements OnInit {
  loading: boolean = false;
	dataSource!: MatTableDataSource<any>;
	displayedColumns: string[] = ["name", "age", "service", "date", "action"];
	@ViewChild(MatPaginator) paginatior !: MatPaginator;
	@ViewChild(MatSort) sort !: MatSort;

	constructor(
		public dialog: MatDialog,
	) {
	}

	ngOnInit(): void {
	}

	Filterchange(data: Event): void {
		const value = (data.target as HTMLInputElement).value;
		this.dataSource.filter = value;
	}

}
