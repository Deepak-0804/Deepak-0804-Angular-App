import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { AuthGuard } from './core/guards/auth-guard';
import { LoginGuard } from './core/guards/login-guard';
import { Register } from './register/register';
import { ForgotPassword } from './forgot-password/forgot-password';




export const routes: Routes = [
  {
    path: '', component: Login, canActivate: [LoginGuard]
  },
  {
    path: 'login', component: Login, canActivate: [LoginGuard]
  },
  {
    path: 'register', component: Register, canActivate: [LoginGuard]
  },
  {
    path: 'forgotpassword', component: ForgotPassword, canActivate: [LoginGuard]
  },
  {
    path: 'layout',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      {
        path: 'about-us',
        loadChildren: () => import('./components/about-us/routes')
      },
      {
        path: 'mission',
        loadChildren: () => import('./components/mission/routes')
      },
      {
        path: 'team',
        loadChildren: () => import('./components/team/routes')
      },

    ], canActivate: [AuthGuard]
  },
];

