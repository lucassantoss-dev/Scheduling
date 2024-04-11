import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../../../../../core/patient.service';
import { PatientApiInterface } from '../../../../../../domain/model/patient/patient-api-interface';
import { PatientInterface } from '../../../../../../domain/model/patient/patient-interface';
import { PatientObjectApiInterface } from '../../../../../../domain/model/patient/patient-object-api-interface';

@Component({
	selector: 'app-patient-detail',
	templateUrl: './patient-detail.component.html',
	styleUrl: './patient-detail.component.scss'
})
export class PatientDetailComponent implements OnInit {
	public loading: boolean = false;
	public id!: string;
	public patient!: PatientInterface;
	
	constructor(
		private route: ActivatedRoute,
		private patientService: PatientService
	) {

	}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.id = params["id"];
			this.getPacientById(this.id);
		})
	}

	getPacientById(id: string): void {
		this.loading = true;
		this.patientService.getPatientsById(id).subscribe({
			next: (patient: PatientObjectApiInterface) => {
				setTimeout(() => {
					this.patient = patient.data;
					this.loading = false;
					console.log('patient', this.patient);
				}, 500)
			}
		})
	}
}
