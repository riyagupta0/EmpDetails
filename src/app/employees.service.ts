import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  baseUrl = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  createEmployees(form: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, form);
  }

  updateEmployees(id: any, data: any) {
    return this.http.put(`${this.baseUrl}/users/${id}`, data);
  }

  deleteEmployee(id: any) {
    return this.http.delete(`${this.baseUrl}/users/${id}`, { responseType: 'text' });
  }

  getEmployeebyID(id: any) {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }
}
