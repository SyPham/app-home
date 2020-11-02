import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Role } from '../_models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl = environment.apiUrl;
  ModalNameSource = new BehaviorSubject<number>(0);
  currentModalName = this.ModalNameSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Role[]>(this.baseUrl + 'Role/GetAll', {});
  }

  create(model: Role) {
    return this.http.post(this.baseUrl + 'Role/Create', model);
  }
  update(model: Role) {
    return this.http.put(this.baseUrl + 'Role/Update', model);
  }
  delete(id: number) {
    return this.http.delete(this.baseUrl + 'Role/Delete/' + id);
  }
}
