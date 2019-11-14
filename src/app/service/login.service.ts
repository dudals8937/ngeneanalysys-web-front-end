import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(cridential: {id: string, password: string}) {
    return this.http.post('/auth/token', cridential);
  }
}
