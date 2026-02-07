import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';
import { HttpClient } from '@angular/common/http';

export const AuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  const http = inject(HttpClient);

  if (auth.isLoggedIn()) {
    return true;
  }
  auth.logout();
  return false;
};



