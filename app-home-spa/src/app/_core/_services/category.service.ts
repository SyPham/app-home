import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl;
  ModalNameSource = new BehaviorSubject<number>(0);
  currentModalName = this.ModalNameSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Category[]>(this.baseUrl + 'Category/GetAll', {});
  }

  create(model: Category) {
    return this.http.post(this.baseUrl + 'Category/Create', model);
  }
  update(model: Category) {
    return this.http.put(this.baseUrl + 'Category/Update', model);
  }
  delete(id: number) {
    return this.http.delete(this.baseUrl + 'Category/Delete/' + id);
  }
}
