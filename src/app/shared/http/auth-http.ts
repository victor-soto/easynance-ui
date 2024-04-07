import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';
import { ILoginResponse } from '../interfaces/auth/auth.interface';

@Injectable()
export class AuthHttp {

  private readonly http = inject(HttpClient);

  private readonly authService = inject(AuthService);

  login(request: unknown): Observable<ILoginResponse> {
    const endpoint = `${environment.API_URL}/login`;

    return this.http.post<ILoginResponse>(endpoint, request).pipe(
      tap(response => this.authService.setAuthToken(response.token))
    );
  }

  logout(): Observable<unknown> {
    const endpoint = `${environment.API_URL}/logout`;
    const request = { token: this.authService.getAuthToken() };

    return this.http.post(endpoint, request).pipe(
      tap(() => this.authService.removeDataFromStorage())
    );
  }

  register(request: unknown): Observable<unknown> {
    const endpoint = `${environment.API_URL}/users`;

    return this.http.post(endpoint, request);
  }
}
