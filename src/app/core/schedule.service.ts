import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleApiInterface } from '../domain/model/schedule/schedule-api-interface';
import { environment } from '../enviroments/enviroment';
import { ScheduleInterface } from '../domain/model/schedule/schedule-interface';

@Injectable({
	providedIn: 'root'
})
export class ScheduleService {
	urlBackEnd = environment.urlBackEnd;

	constructor(private http: HttpClient) { }

	getAllSchedules(): Observable<ScheduleApiInterface> {
		const url = `${this.urlBackEnd}/schedule`;
		return this.http.get<ScheduleApiInterface>(url);
	}

	createSchedule(payload: ScheduleInterface): Observable<ScheduleInterface> {
		const url = `${this.urlBackEnd}/schedule/create`;
		return this.http.post<ScheduleInterface>(url, payload);
	}
}
