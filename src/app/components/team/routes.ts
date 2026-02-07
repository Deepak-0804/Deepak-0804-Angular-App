import { Routes } from '@angular/router';
 
export default [
  {
    path: '',
    loadComponent: () => import('./team').then(c => c.Team)
  },
] satisfies Routes;