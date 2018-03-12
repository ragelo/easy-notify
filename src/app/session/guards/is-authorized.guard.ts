import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../shared/services/auth.service';

@Injectable()
export class IsAuthorizedGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthorized()) {
      return true;
    }
    this.router.navigate(['/auth']);

    return false;
  }

}
