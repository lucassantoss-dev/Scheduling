import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PatientApiInterface } from '../domain/model/patient/patient-api-interface';
import { PatientInterface } from '../domain/model/patient/patient-interface';
import { environment } from '../enviroments/enviroment';

@Injectable({
	providedIn: 'root'
})
export class PatientService {
	public urlBackEnd = environment.urlBackEnd;
	constructor(private http: HttpClient) { }

	getPatients(): Observable<PatientApiInterface> {
		const url = `${this.urlBackEnd}/client`;
		return this.http.get<PatientApiInterface>(url);
	}

	getPatientsById(id: string): Observable<PatientApiInterface> {
		const url = `${this.urlBackEnd}/client/${id}`;
		return this.http.get<PatientApiInterface>(url);
	}

	createPatient(data: PatientInterface): Observable<PatientInterface> {
		const url = `${this.urlBackEnd}/client/create`;
		return this.http.post<PatientInterface>(url, data);
	}

	updatePatient(id: string, data: PatientInterface): Observable<PatientInterface> {
		const url = `${this.urlBackEnd}/client/${id}`;
		return this.http.put<PatientInterface>(url, data);
	}

	deletePatient(id: string): Observable<PatientInterface> {
		const url = `${this.urlBackEnd}/client/${id}`;
		return this.http.delete<PatientInterface>(url);
	}
}
