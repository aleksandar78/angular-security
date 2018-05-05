import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProductService } from './product.service';

@Component({
  selector: 'asec-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns = [
    'edit',
    'name',
    'date',
    'price',
    'url',
    'delete'
  ];

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service
      .getProducts()
      .subscribe(
        products => (this.dataSource = new MatTableDataSource(products))
      );
  }
}
