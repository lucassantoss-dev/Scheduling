import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenModalComponent } from '../modal/token-modal.component';

@Component({
	selector: 'app-token-view',
	templateUrl: './token-view.component.html',
	styleUrl: './token-view.component.scss'
})
export class TokenViewComponent implements OnInit {
	loading: boolean = false;
	dataSource!: MatTableDataSource<any>;
	displayedColumns: string[] = ["codigo", "name", "description", "action"];
	@ViewChild(MatPaginator) paginatior !: MatPaginator;
	@ViewChild(MatSort) sort !: MatSort;

	constructor(
		public dialog: MatDialog,
		private router: Router
	) {
	}

	ngOnInit(): void {
	}

	Filterchange(data: Event): void {
		const value = (data.target as HTMLInputElement).value;
		this.dataSource.filter = value;
	}

	createToken(): void {
		console.log('entrou aqui?')
		// this.router.navigate(['/dashboard/patients/create-token'])
		const dialogRef = this.dialog.open(TokenModalComponent, {
			width: '1200px',
			height: '360px'
		});

		dialogRef.afterClosed().subscribe(result => {
		});
	}

	editToken(id: string, data: string): void {

	}

	deleteToken(id: string): void {
		
	}
}
