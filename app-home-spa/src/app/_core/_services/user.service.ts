import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, UserForCreate } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  ModalNameSource = new BehaviorSubject<number>(0);
  currentModalName = this.ModalNameSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<User[]>(this.baseUrl + 'User/GetAll', {});
  }

  create(model: UserForCreate) {
    return this.http.post(this.baseUrl + 'User/Create', model);
  }
  update(model: UserForCreate) {
    return this.http.put(this.baseUrl + 'User/Update', model);
  }
  delete(id: number) {
    return this.http.delete(this.baseUrl + 'User/Delete/' + id);
  }
}
