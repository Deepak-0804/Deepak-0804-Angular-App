import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./about-us').then(c => c.AboutUs)
  },
  {
    path: 'branches',
    loadComponent: () => import('../branches/branches').then(c => c.Branches)
  },
  
] satisfies Routes;