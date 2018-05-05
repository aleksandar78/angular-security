import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serviceUrl = 'http://localhost:3000/products';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.serviceUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.serviceUrl + id.toString());
  }

  addProduct(entity: Product): Observable<Product> {
    return this.http.post<Product>(this.serviceUrl, entity, this.httpOptions);
  }

  updateProduct(entity: Product): Observable<any> {
    return this.http.put(this.serviceUrl, entity, this.httpOptions);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.serviceUrl + id.toString(), this.httpOptions);
  }
}
