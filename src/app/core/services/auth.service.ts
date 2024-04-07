import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated(): boolean {
    return true;
  }

  setAuthToken(token: string): void {
    if (token) {
      localStorage.setItem('auth_token', token);
    }
  }

  getAuthToken(): string {
    const token = localStorage.getItem('auth_token');

    return token || '';
  }

  removeDataFromStorage(): void {
    localStorage.removeItem('auth_token');
  }

}
