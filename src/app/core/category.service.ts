import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as categoryMock from '../shared/mocks/category-mock.json';
import { Observable, of } from 'rxjs';
import { CategoryApiInterface } from '../domain/model/category/category-api-interface';
import { CategoryInterface } from '../domain/model/category/category-interface';
import { environment } from '../enviroments/enviroment';
import { CategoryObjectApiInterface } from '../domain/model/category/category-object-api-interface';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	public urlBackEnd = environment.urlBackEnd;

	constructor(
		private http: HttpClient,
		private authService: AuthService
	) { }

	getAllCategories(): Observable<CategoryApiInterface> {
		const url = `${this.urlBackEnd}/category`;
		return this.authService.authGet<CategoryApiInterface>(url);
	}

	getCategoryById(id: string): Observable<CategoryObjectApiInterface> {
		const url = `${this.urlBackEnd}/category/${id}`;
		return this.http.get<CategoryObjectApiInterface>(url);
	}

	createCategory(data: CategoryInterface): Observable<CategoryInterface> {
		const url = `${this.urlBackEnd}/category/create`;
		return this.authService.authPost<CategoryInterface>(url, data);
	}

	editCategory(id: string, data: CategoryInterface): Observable<CategoryInterface> {
		const url = `${this.urlBackEnd}/category/${id}`;
		return this.authService.authPut<CategoryInterface>(url, data);
	}

	deleteCategory(id: string): Observable<CategoryInterface> {
		const url = `${this.urlBackEnd}/category/${id}`;
		return this.authService.authDelete<CategoryInterface>(url);
	}
}
