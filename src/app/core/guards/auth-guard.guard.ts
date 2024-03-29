import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  return authService.isAuthenticated();
};
