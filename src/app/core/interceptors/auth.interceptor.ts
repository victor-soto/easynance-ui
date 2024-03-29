import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith(`${environment.API_URL}/login`)) {

    return next(req);
  }

  const authService = inject(AuthService);
  req = req.clone({
    setHeaders: {
      'Authorization': `Bearer ${authService.getAuthToken()}`,
    },
  });

  return next(req);
};
