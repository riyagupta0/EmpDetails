
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-create-emp',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './create-emp.component.html',
  styleUrl: './create-emp.component.css'
})
export class CreateEmpComponent {

  calculatedAge: number = 0;

  constructor(private route: Router, private empService: EmployeesService) { }
  onSubmit(form: any) {
    if (form.valid) {
      this.empService.createEmployees(form.value).subscribe(() => {
        alert("Employee is successfully added!");
        this.route.navigate(['/dashboard']);
      }, error => {
        console.error("Backend error:", error);
        alert("Something went wrong. Please check console for details.");
      });

    } else {
      alert("Invalid form");

    }
  }
  calculateAge(event: any) {
    const dob = new Date(event.target.value);
    const today = new Date();


    console.log(today.getFullYear(), dob.getFullYear());

    let age = today.getFullYear() - dob.getFullYear();

    console.log(today.getMonth(), dob.getMonth());
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    this.calculatedAge = age;
  }


}
