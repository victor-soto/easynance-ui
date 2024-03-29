import { Routes } from "@angular/router";
// import LoginComponent from "./login.component";

export default [
  { path: '', loadComponent: () => import('./login.component') },
  // { path: '', loadComponent: LoginComponent }
] as Routes;
