import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';
import { SubcategoryApiInterface } from '../domain/model/subcategory/subcategory-api-interface';
import { SubcategoryObjectApiInterface } from '../domain/model/subcategory/subcategory-object-api-interface';

@Injectable({
	providedIn: 'root'
})
export class SubcategoryService {
	urlBackEnd = environment.urlBackEnd;
	constructor(private http: HttpClient) { }

	getAllSubcategory(): Observable<SubcategoryApiInterface> {
		const url = `${this.urlBackEnd}/subcategory`;
		return this.http.get<SubcategoryApiInterface>(url);
	}

	getSubcategoryById(id: string): Observable<SubcategoryObjectApiInterface> {
		const url = `${this.urlBackEnd}/subcategory/${id}`;
		return this.http.get<SubcategoryObjectApiInterface>(url);
	}

  getSubcategoryByCategory(categoryId: string): Observable<SubcategoryApiInterface> {
    const url = `${this.urlBackEnd}/subcategory/category/${categoryId}`;
		return this.http.get<SubcategoryApiInterface>(url);
  }
}
