import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private readonly AUTH_KEY = 'isAuthenticated';

    constructor() {}

    get isAuthenticated(): boolean {
      return sessionStorage.getItem(this.AUTH_KEY) === 'true';
    }
  
    set isAuthenticated(value: boolean) {
      sessionStorage.setItem(this.AUTH_KEY, value.toString());
    }
}
