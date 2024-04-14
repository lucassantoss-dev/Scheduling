import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { LoginInterface } from '../domain/model/login/login-interface';
import { LoginApiInterface } from '../domain/model/login/login-api-itnerface';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	urlBackEnd = environment.urlBackEnd;
	constructor(private http: HttpClient) { }

	getUser(): Observable<LoginInterface> {
		const url: string = `${this.urlBackEnd}/login`;
		return this.http.get<LoginInterface>(url);
	}

	login(params: LoginInterface): Observable<LoginApiInterface> {
		const url: string = `${this.urlBackEnd}/auth/login`;
		return this.http.post<LoginApiInterface>(url, params);
	}
}
