import { Routes } from '@angular/router';
import { authGuardGuard } from './core/guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.routes'),
    canActivate: [authGuardGuard],
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./feature/login/login.routes') },
  { path: 'register', loadChildren: () => import('./feature/registration/registration.routes') },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
