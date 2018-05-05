import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: SecurityService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const claimType: string = next.data['claimType'];
    return this.service.securityObject.isAuthenticated &&
      this.service.securityObject[claimType]
      ? true
      : this.goToLoginPage(state.url);
  }

  private goToLoginPage(requestedUrl: string) {
    this.router.navigate(['/login'], {
      queryParams: { returnUrl: requestedUrl }
    });
    return false;
  }
}
