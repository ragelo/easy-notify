import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('a_token');
  }

  public isAuthorized(): boolean {
    return !!this.getToken();
  }
}
