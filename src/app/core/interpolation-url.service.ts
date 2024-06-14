import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class InterpolationUrlService {

	constructor() { }

	interpolationUrl(url: string, params?: any): string {
		if (!params) return url;
		let endpoint: string = url;

		Object.keys(params).forEach((param) => {
			if (url.indexOf(`:${param}`) > -1) {
				endpoint = endpoint.replace(`:${param}`, params[param]);
			}
		});

		return endpoint;
	}
}
