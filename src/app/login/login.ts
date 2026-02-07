import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Api } from '../core/services/api/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private api: Api, private router: Router) { }

  login() {
    if (!this.username || !this.password) {
      alert('Enter username and password');
      return;
    }

    this.api.login(this.username, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token); // store JWT
        this.router.navigate(['/layout']);       // redirect to main layout
      },
      error: (err: HttpErrorResponse) => alert('Invalid credentials')
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
