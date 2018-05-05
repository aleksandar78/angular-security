import { Component, OnInit } from '@angular/core';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { SecurityService } from './security.service';

@Component({
  selector: 'asec-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth;

  constructor(private securityService: SecurityService) {}

  ngOnInit() {}

  login() {
    console.log('Send login data to server: ' + JSON.stringify(this.user));
    this.securityService
      .login(this.user)
      .subscribe(res => (this.securityObject = res));
  }
}
