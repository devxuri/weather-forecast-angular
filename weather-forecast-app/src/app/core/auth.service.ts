import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private isAuthenticate: boolean = false;
  constructor(private http: HttpClient) {}

  signIn(username: string, password: string): void/*Observable<any*/ {

  }
  signUp(username: string, password: string): void /*Observable<any>*/ {

  }
  

  public isAuthenticated(): boolean {
    return this.isAuthenticate;
  }
}
