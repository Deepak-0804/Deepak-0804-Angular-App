import { Routes } from '@angular/router';
 
export default [
  {
    path: '',
    loadComponent: () => import('./mission').then(c => c.Mission)
  },
  {
    path: 'mission-details/:id',
    loadComponent: () => import('./mission-details/mission-details').then(c => c.MissionDetails)
  }
] satisfies Routes;