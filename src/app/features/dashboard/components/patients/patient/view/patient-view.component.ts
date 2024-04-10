import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../../../../../../core/patient.service';
import { PatientApiInterface } from '../../../../../../domain/model/patient/patient-api-interface';
import { PatientInterface } from '../../../../../../domain/model/patient/patient-interface';
import { PatientFormComponent } from '../form/patient-form.component';
import { ConfirmationModalComponent } from '../../../../../../shared/modal/confirmation-modal/confirmation-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrl: './patient-view.component.scss'
})
export class PatientViewComponent implements OnInit {
  	loading: boolean = false;
	dataSource!: MatTableDataSource<PatientInterface>;
	displayedColumns: string[] = ["name", "age", "email", "date", "address", "action"];
	@ViewChild(MatPaginator) paginatior !: MatPaginator;
	@ViewChild(MatSort) sort !: MatSort;

	constructor(
		public dialog: MatDialog,
		private patientService: PatientService,
		private router: Router
	) {
	}

	ngOnInit(): void {
		this.getAllPatients();
	}

	Filterchange(data: Event): void {
		const value = (data.target as HTMLInputElement).value;
		this.dataSource.filter = value;
	}

	getAllPatients(): void {
		this.loading = true;
		this.patientService.getPatients().subscribe({
			next: (patient: PatientApiInterface) => {
				setTimeout(() => {
					this.loading = false;
					this.dataSource = new MatTableDataSource<PatientInterface>(patient.data);
					console.log('data', patient.data);
				}, 700)
			}
		})
	}

	createPatient(): void {
		const dialogRef = this.dialog.open(PatientFormComponent, {
			width: '1200px',
			height: '600px'
		});

		dialogRef.afterClosed().subscribe(result => {
			this.getAllPatients();
		});
	}

	editPatient(id: string, data: PatientInterface): void {
		const dialogRef = this.dialog.open(PatientFormComponent, {
			width: '1200px',
			height: '600px',
			data: { id: id, patient: data },
		});

		dialogRef.afterClosed().subscribe(result => {
			this.getAllPatients();
		});
	}

	detailPatient(id: string): void {
		const url = `/dashboard/patients/patient/detail/${id}`;
		this.router.navigate([url]);
	}

	deletePatient(id: string): void {
		const dialogRef = this.dialog.open(ConfirmationModalComponent, {
			width: '300px',
			data: { title: 'Confirmação', message: 'Deseja realmente excluir?' }
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.patientService.deletePatient(id).subscribe({
					next: () => {
						this.getAllPatients();
					}, error: (err: Error) => {
						console.error('error', err.message);
					}
				})
			}
		});
	}
}
