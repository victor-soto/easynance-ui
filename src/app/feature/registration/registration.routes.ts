import { Routes } from "@angular/router";

export default [
  {
    path: '', loadComponent: () => import('./registration.component'),
  }
] as Routes;
