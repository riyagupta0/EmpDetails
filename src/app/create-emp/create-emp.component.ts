
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

  constructor(private route: Router, private empService: EmployeesService) { }
  onSubmit(form: any) {
    if (form.valid) {
      this.empService.createEmployees(form).subscribe(() => {
        alert("Employee is successfully added!");
        this.route.navigate(['/dashboard']);
      });

    } else {
      alert("Invalid form");

    }
  }


}
