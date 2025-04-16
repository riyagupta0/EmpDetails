import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get('http://localhost:3000/employees');
  }

  createEmployees(form: any): Observable<any> {
    return this.http.post('http://localhost:3000/employees', form.value);
  }

  updateEmployees(id: any, data: any) {
    return this.http.put(`http://localhost:3000/employees/${id}`, data);
  }

  deleteEmployee(id: any) {
    return this.http.delete('http://localhost:3000/employees/' + id);
  }

  getEmployeebyID(id: any) {
    return this.http.get('http://localhost:3000/employees/' + id);
  }
}
