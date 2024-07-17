import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleApiInterface } from '../domain/model/schedule/schedule-api-interface';
import { environment } from '../enviroments/enviroment';
import { ScheduleInterface } from '../domain/model/schedule/schedule-interface';
import { ScheduleHourInterface } from '../domain/model/schedule/schedule-hour-interface';
import { ScheduleHourApiInterface } from '../domain/model/schedule/schedule-hour-api-interface';

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

  createScheduleHour(payload: ScheduleHourInterface): Observable<ScheduleHourInterface> {
    const url = `${this.urlBackEnd}/schedule/create-schedule-definition`;
    return this.http.post<ScheduleHourInterface>(url, payload);
  }

  getScheduleHourByDate(date: string): Observable<ScheduleHourApiInterface> {
    const url = `${this.urlBackEnd}/schedule/get-available-times/${date}`
    return this.http.get<ScheduleHourApiInterface>(url);
  }

  patchHourInDate(date: string, hour: string): Observable<ScheduleHourInterface> {
    const url = `${this.urlBackEnd}/schedule/remove-schedule`;
    const query = {
      date: date,
      time: hour
    }
    return this.http.patch<ScheduleHourInterface>(url, query);
  }
}
