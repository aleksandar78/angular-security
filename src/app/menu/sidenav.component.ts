import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'asec-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  securityObject: AppUserAuth;

  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }

  ngOnInit() {}

  logout() {
    this.securityService.logout();
  }
}
