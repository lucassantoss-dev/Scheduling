import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { PhysioterapistApiInterface } from '../domain/model/physioterapist/physioterapist-api-interface';
import { PhysioterapistObjectApiInterface } from '../domain/model/physioterapist/physioterapist-object-api-interface';

@Injectable({
	providedIn: 'root'
})
export class PhysioterapistService {
	urlBackEnd = environment.urlBackEnd;

	constructor(private http: HttpClient) { }

	getAllPhysios(): Observable<PhysioterapistApiInterface> {
		const url = `${this.urlBackEnd}/physio`;
		return this.http.get<PhysioterapistApiInterface>(url);
	}

	getPhysioById(id: string): Observable<PhysioterapistObjectApiInterface> {
		const url = `${this.urlBackEnd}/physio/${id}`;
		return this.http.get<PhysioterapistObjectApiInterface>(url);
	}
}
