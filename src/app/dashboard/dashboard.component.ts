
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { Route, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [NgFor, RouterLink, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private empService: EmployeesService) { }
  employees: any = [];

  ngOnInit(): void {
    this.empService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    })
  }

  deleteEmp(id: any): void {
    this.empService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter((emp: any) => emp.id !== id);
    });

  }
  trackEmp(index: number, emp: any) {
    return emp.id;
  }

}

