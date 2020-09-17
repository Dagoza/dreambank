import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticatorService } from 'src/app/services/authenticator/authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    public authService: AuthenticatorService,
    public router: Router
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!await this.authService.checkAuthenticated()) {
      await this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
