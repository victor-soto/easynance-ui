import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule) },
];
