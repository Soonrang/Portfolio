import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', loadComponent: () => import('./pages/about-me/about-me.component').then(m => m.AboutMeComponent) },
];
