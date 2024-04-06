import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as categoryMock from '../shared/mocks/category-mock.json';
import { Observable, of } from 'rxjs';
import { CategoryApiInterface } from '../domain/model/category/category-api-interface';
import { CategoryInterface } from '../domain/model/category/category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<CategoryApiInterface> {
    return of(categoryMock);
  }

  createCategory(data: CategoryInterface): Observable<CategoryInterface> {
    const url = 'urlBack'
    return this.http.post<CategoryInterface>(url, data);
  }
}
