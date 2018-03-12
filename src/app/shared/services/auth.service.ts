import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

import { environment } from '../../../environments/environment';

declare var gapi;

const STORAGE_TOKEN_KEY = 'auth';
const STORAGE_USER_KEY = 'user';

@Injectable()
export class AuthService {
  public user$: Subject<any | null>;
  private auth2: Promise<any>;

  constructor(private router: Router, private http: HttpClient) {
    this.user$ = new BehaviorSubject(this.getCurrentUser());
    this.auth2 = new Promise((resolve) => {
      setTimeout(() => {
        gapi.load('auth2', () => {
          resolve(gapi.auth2);
        });
      }, 200);
    });
  }

  public getCurrentUser(): any {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_USER_KEY));
    } catch (exc) {
      this.logOut();
      return null;
    }
  }

  public getToken(): string {
    return localStorage.getItem(STORAGE_TOKEN_KEY);
  }

  public isAuthorized(): boolean {
    return !!this.getToken();
  }

  public async signInStart(): Promise<any> {
    return (await this.auth2).authorize({
      client_id: environment.googleAppId,
      scope: 'email profile openid',
      response_type: 'id_token permission'
    }, (response) => {
      if (response.error) {
        console.error(response.error); // popup_closed_by_user
        return;
      }

      this.exchangeGoogleToken(response.id_token);
    });
  }

  public signInFinish(idToken: string): Promise<any> {
    return this.exchangeGoogleToken(idToken);
  }

  public async signUpStart(): Promise<any> {
    return this.signInStart();
  }

  public async logOut(): Promise<any> {
    localStorage.removeItem(STORAGE_USER_KEY);
    localStorage.removeItem(STORAGE_TOKEN_KEY);
    this.user$.next(null);
    this.router.navigate(['auth']);
  }

  private async exchangeGoogleToken(idToken: string): Promise<any> {
    return this.http.post(`${environment.serverURL}/api/auth/token/google`, {
      idToken
    }).toPromise().then((response: any) => {
      localStorage.setItem(STORAGE_TOKEN_KEY, response.authToken);
      localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(response.user));
      this.user$.next(response.user);
      this.router.navigate(['']);
      return response;
    });
  }
}
