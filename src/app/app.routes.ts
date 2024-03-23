import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule) },
];
