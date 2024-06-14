import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PatientApiInterface } from '../domain/model/patient/patient-api-interface';
import { PatientInterface } from '../domain/model/patient/patient-interface';
import { environment } from '../enviroments/enviroment';
import { PatientObjectApiInterface } from '../domain/model/patient/patient-object-api-interface';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class PatientService {
	public urlBackEnd = environment.urlBackEnd;
	constructor(
		private http: HttpClient,
		private authService: AuthService
	) { }

	getPatients(): Observable<PatientApiInterface> {
		const url = `${this.urlBackEnd}/client`;
		return this.http.get<PatientApiInterface>(url);
	}

	getPatientsById(id: string): Observable<PatientObjectApiInterface> {
		const url = `${this.urlBackEnd}/client/${id}`;
		return this.http.get<PatientObjectApiInterface>(url);
	}

	createPatient(data: PatientInterface): Observable<PatientInterface> {
		const url = `${this.urlBackEnd}/client/create`;
		return this.authService.authPost<PatientInterface>(url, data);
	}

	updatePatient(id: string, data: PatientInterface): Observable<PatientInterface> {
		const url = `${this.urlBackEnd}/client/${id}`;
		return this.authService.authPut<PatientInterface>(url, data);
	}

	deletePatient(id: string): Observable<PatientInterface> {
		const url = `${this.urlBackEnd}/client/${id}`;
		return this.authService.authDelete<PatientInterface>(url);
	}
}
