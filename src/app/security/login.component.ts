import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  returnUrl: string;

  constructor(
    private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  login() {
    console.log('Send login data to server: ' + JSON.stringify(this.user));
    this.securityService.login(this.user).subscribe(res => {
      this.securityObject = res;
      if (!!this.returnUrl) {
        this.router.navigateByUrl(this.returnUrl);
      }
    });
  }
}
