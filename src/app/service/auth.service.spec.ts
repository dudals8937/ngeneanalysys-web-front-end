import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('get token test', () => {
    const service: AuthService = TestBed.get(AuthService);
    if (localStorage.getItem('token') !== null) {
      localStorage.removeItem('token');
    }
    expect( () => {service.getAuthHeaders(); }).toThrow(new Error('Token is required'));
    service.setToken('abc');
    expect(service.getAuthHeaders().headers.get('authorization')).toBe(`Bearer abc`);
    expect(service.getToken()).toEqual('abc');
    service.removeToken();
    expect(service.getToken()).toBe(null);
  });
});
