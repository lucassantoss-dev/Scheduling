import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterpolationUrlService } from './interpolation-url.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private http: HttpClient,
		private interpolationUrlService: InterpolationUrlService
	) { }

	authGetResponse<T>(
		url: string,
		params?: {},
		options?: {}
	): Observable<T> {
		const requestUrl = this.getInterpolationUrl(url, params);
		options = this.setRequestOptions(options);
		return this.http.get<T>(requestUrl, options);
	}

	authGet<T>(url: string, params?: {}, options?: {}): Observable<T> {
		const requestUrl = this.getInterpolationUrl(url, params);
		options = this.setRequestOptions(options);
		return this.http.get<T>(requestUrl, options);
	}

	authPost<T>(
		url: string,
		data: any,
		params?: {},
		options?: {}
	): Observable<T> {
		const requestUrl = this.getInterpolationUrl(url, params);
		const body = JSON.stringify(data);
		options = this.setRequestOptions(options);
		return this.http.post<T>(requestUrl, body, options);
	}

	authPut<T>(
		url: string,
		data: any,
		params?: {},
		options?: {}
	): Observable<T> {
		const requestUrl = this.getInterpolationUrl(url, params);
		const body = JSON.stringify(data);
		options = this.setRequestOptions(options);
		return this.http.put<T>(requestUrl, body, options);
	}

	authDelete<T>(
		url: string,
		params?: {},
		options?: {}
	): Observable<T> {
		const requestUrl = this.getInterpolationUrl(url, params);
		options = this.setRequestOptions(options);
		return this.http.delete<T>(requestUrl, options);
	}

	private get token() {
		return JSON.parse(window.localStorage.getItem("token") as string);
	}

	private setRequestOptions(options?: { headers?: HttpHeaders }) {
		const header = new HttpHeaders({
			Authorization: this.token,
		});
		if (options) {
			//@ts-ignore
			options.headers = options.headers.append("Authorization", header.get("Authorization"))
				.append("Content-Type", "application/json");
		} else {
			options = { headers: header };
			//@ts-ignore
			options.headers = options.headers.append(
				"Content-Type",
				"application/json"
			);
		}

		return options;
	}

	private getInterpolationUrl(url: string, params?: {}): string {
		return (
			this.interpolationUrlService.interpolationUrl(url, params)
		);
	}
}
