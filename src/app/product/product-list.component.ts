import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';
import { ProductService } from './product.service';

@Component({
  selector: 'asec-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['edit', 'name', 'date', 'price', 'url', 'delete'];
  securityObject: AppUserAuth;

  constructor(
    private service: ProductService,
    private securitySrv: SecurityService
  ) {}

  ngOnInit() {
    this.securityObject = this.securitySrv.securityObject;
    this.service
      .getProducts()
      .subscribe(
        products => (this.dataSource = new MatTableDataSource(products))
      );
  }
}
