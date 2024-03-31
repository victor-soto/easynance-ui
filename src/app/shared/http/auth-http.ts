import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';

@Injectable()
export class AuthHttp {

  private readonly http = inject(HttpClient);

  private readonly authService = inject(AuthService);

  login(request: unknown): Observable<unknown> {
    const endpoint = `${environment.API_URL}/login`;

    return this.http.post(endpoint, request).pipe(
      tap(token => this.authService.setAuthToken(token as string))
    );
  }

  logout(): Observable<unknown> {
    const endpoint = `${environment.API_URL}/logout`;

    return this.http.post(endpoint, {}).pipe(
      tap(() => this.authService.removeDataFromStorage())
    );
  }

  register(request: unknown): Observable<unknown> {
    const endpoint = `${environment.API_URL}/users`;

    return this.http.post(endpoint, request);
  }
}
