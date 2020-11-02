import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Bpfc, BpfcForCreate } from '../_models/bpfc';

@Injectable({
  providedIn: 'root'
})
export class BpfcService {
  baseUrl = environment.apiUrl;
  ModalNameSource = new BehaviorSubject<number>(0);
  currentModalName = this.ModalNameSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Bpfc[]>(this.baseUrl + 'BPFC/GetAll', {});
  }

  create(model: BpfcForCreate) {
    return this.http.post(this.baseUrl + 'BPFC/Create', model);
  }
  update(model: BpfcForCreate) {
    return this.http.put(this.baseUrl + 'BPFC/Update', model);
  }
  delete(id: number) {
    return this.http.delete(this.baseUrl + 'BPFC/Delete/' + id);
  }
}
