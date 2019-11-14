import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string {
    if (localStorage.getItem('token') === null) {
      return null;
    } else {
      return localStorage.getItem('token');
    }
  }

  setToken(value: string): void {
    localStorage.setItem('token', value);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  getAuthHeaders() {
    const token = this.getToken();
    if (token) {
      return {
        headers: new HttpHeaders({ authorization: `Bearer ${token}` })
      };
    } else {
      throw new Error('Token is required');
    }
  }
}
