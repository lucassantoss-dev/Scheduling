import { Injectable } from '@angular/core';
import * as patienMock from '../shared/mocks/patients-mock.json';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PatientApiInterface } from '../domain/model/patient/patient-api-interface';
import { PatientInterface } from '../domain/model/patient/patient-interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients(): Observable<PatientApiInterface> {
    return of(patienMock);
  }

  createPatient(data: PatientInterface): Observable<PatientInterface> {
    const url = 'urlBack'
    return this.http.post<PatientInterface>(url, data);
  }
}
