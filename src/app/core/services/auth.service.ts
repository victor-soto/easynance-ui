import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated(): boolean {
    return false;
  }

  setAuthToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getAuthToken(): string {
    const token = localStorage.getItem('auth_token');

    return token || '';
  }

  removeDataFromStorage(): void {
    localStorage.removeItem('auth_token');
  }

}
