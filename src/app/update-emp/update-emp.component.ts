import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-emp',
  imports: [FormsModule, RouterOutlet, NgIf],
  templateUrl: './update-emp.component.html',
  styleUrl: './update-emp.component.css'
})
export class UpdateEmpComponent implements OnInit {

  empId: any;
  empData: any;

  constructor(private route: ActivatedRoute, private empService: EmployeesService, private routee: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.empId = params['id'];
    });
    this.empService.getEmployeebyID(this.empId).subscribe((data) => {
      this.empData = data;
      console.log(this.empData);
    })
  }
  onUpdate(form: any): void {
    if (form.valid) {
      this.empService.updateEmployees(this.empId, this.empData).subscribe((res) => {
        console.log('Employee updated successfully!', res);
        alert('Employee updated successfully!');
        this.routee.navigate(['/dashboard']);
      });
    } else {
      console.error('Update failed');
      alert('Update failed. Please try again.');
    }

  }

}
