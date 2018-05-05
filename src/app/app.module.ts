import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatGridListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category/category-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductListComponent } from './product/product-list.component';
import { SidenavComponent } from './menu/sidenav.component';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    ProductDetailComponent,
    CategoryListComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
