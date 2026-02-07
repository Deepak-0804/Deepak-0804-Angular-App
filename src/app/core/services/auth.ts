import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private http: HttpClient, private route: Router) { }

  private readonly apiUrl = environment.apiUrl;

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    // Simple check for token existence; in real scenarios, validate token expiration etc.
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');

    this.http.post(`${this.apiUrl}/api/Auth/logout`, {}, { withCredentials: true })
      .subscribe(() => {
        this.route.navigate(['']);
      });
  }

}
