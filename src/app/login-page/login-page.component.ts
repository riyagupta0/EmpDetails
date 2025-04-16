
import { Component, ElementRef, ViewChild } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login-page',
  imports: [RouterOutlet],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChild('usernameInput') usernameInput!: ElementRef;

  toggleIcon: any = '👁️';

  constructor(private route: Router) { }

  onSubmitHandler() {
    const username = this.usernameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }
    this.route.navigate(['/create']);
  }

  toggleClick() {
    const inputElement = this.passwordInput.nativeElement;

    const type = inputElement.getAttribute('type') === 'password' ? 'text' : 'password';
    inputElement.setAttribute('type', type);
    this.toggleIcon = type === 'password' ? '👁️' : '🔒';
  }
}
