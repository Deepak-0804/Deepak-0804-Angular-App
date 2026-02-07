import { HttpInterceptorFn, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { Refresh } from './../services/refresh';
import { Observable } from 'rxjs';
import { Auth } from '../services/auth';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const refresh = inject(Refresh);
  const token = localStorage.getItem('token');
  const authService = inject(Auth);
  //const router = inject(Router);

  // Always send cookies
  let modifiedReq = req.clone({
    withCredentials: true
  });

  // Add JWT header if token exists
  if (token) {
    modifiedReq = modifiedReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(modifiedReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        return refreshTokenAndRetry(modifiedReq, next, refresh).pipe(
          catchError(refreshErr => {
            authService.logout();   // remove token
            //router.navigate(['/login']);  // redirect user
            return throwError(() => refreshErr);
          })
        );
      }
      else if (err.status === 403) {
        authService.logout();   // remove token
      }
      else if (err.status === 404) {
        authService.logout();   // remove token
      }
      return throwError(() => err);
    })
  ) as Observable<HttpEvent<any>>;;
};

function refreshTokenAndRetry(originalRequest: any, next: any, refresh: Refresh): Observable<HttpEvent<any>> {
  return refresh.refreshToken().pipe(
    switchMap((newJwt: string | null) => {

      if (!newJwt) {
        return throwError(() => new Error('Failed to refresh token')) as Observable<HttpEvent<any>>;
      }

      const retryRequest = originalRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${newJwt}`
        }
      });

      return next(retryRequest);
    })
  ) as Observable<HttpEvent<any>>;
}

