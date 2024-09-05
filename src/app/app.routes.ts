import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home-page/home-page.component'),
  },
  {
    path: 'country',
    loadComponent: () => import('./country-page/country-page.component'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
