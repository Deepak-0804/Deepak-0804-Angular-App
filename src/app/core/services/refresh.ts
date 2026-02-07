import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, filter, switchMap, throwError } from 'rxjs';
import { Api } from './api/api';


@Injectable({
  providedIn: 'root'
})
export class Refresh {
  
  private isRefreshing = false;
  private refreshSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private api:Api) {}

  refreshToken() {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      return this.http.post<any>(
        `${this.api.apiUrl}/api/Token/Refresh`,
        {},
        { withCredentials: true }   // sends HttpOnly cookie
      ).pipe(
        switchMap((res: any) => {
          const newJwt = res.accessToken;
          localStorage.setItem('token', newJwt);

          this.isRefreshing = false;
          this.refreshSubject.next(newJwt);

          return this.refreshSubject;
        }),
        catchError(err => {
          this.isRefreshing = false;
          this.refreshSubject.next(null);
          return throwError(() => err);
        })
      );
    } 
    else {
      return this.refreshSubject.pipe(
        filter(token => token != null)
      );
    }
  }
}
