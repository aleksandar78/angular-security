import { Injectable } from '@angular/core';
import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { Observable, of } from 'rxjs';
import { LOGIN_MOCKS } from './login-mocks';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  securityObject: AppUserAuth = new AppUserAuth();

  constructor() { }

  resetSecurityObject(): void {
    this.securityObject.bearerToken = '';
    this.securityObject.userName = '';
    this.securityObject.isAuthenticated = false;
    this.securityObject.canAccessProduct = false;
    this.securityObject.canAddProduct = false;
    this.securityObject.canEditProduct = false;
    this.securityObject.canAccessCategories = false;
    this.securityObject.canAddCategory = false;
    localStorage.removeItem('bearerToken');
  }

  login(user: AppUser): Observable<AppUserAuth> {
    // init security object
    this.resetSecurityObject();

    // use object assign to update the current object
    // do not create new app user auth object, that will
    // destroy all object references
    const authenticatedUser = LOGIN_MOCKS.find(
      existingUser => existingUser.userName.toLocaleLowerCase() === user.userName.toLocaleLowerCase()
    );
    Object.assign(this.securityObject, authenticatedUser);

    if (this.securityObject.userName !== '') {
      localStorage.setItem('bearerToken', this.securityObject.bearerToken);
    }

    return of(this.securityObject);
  }

  logout(): void {
    this.resetSecurityObject();
  }
}
