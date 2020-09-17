import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  uri = 'http://localhost:1000/api';
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserModelService
  ) { }

  login(username: string, password: string) {
    this.http.post(this.uri + '/authenticate', { username, password })
      .subscribe((resp: User) => {
        this.router.navigate(['dashboard']);
        this.userService.setUser(resp);
        sessionStorage.setItem('token', resp.jwt);
      })
  }

  validateJwt() {
    this.http.get(this.uri + '/jwt/authenticate')
      .subscribe((resp: User) => {
        this.userService.setUser(resp);
        sessionStorage.setItem('token', resp.jwt);
      }, (err) => {
          this.logout('/login')
        })
  }

  checkAuthenticated() {
    if (!this.logIn) {
      return false
    }
    return true;
  }

  logout(redirect: String) {
    sessionStorage.removeItem('token');
    this.router.navigate([redirect]);
  }

  public get logIn(): boolean {
    return (sessionStorage.getItem('token') !== null);
  }
}
