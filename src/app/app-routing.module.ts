import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductListComponent } from './product/product-list.component';
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './security/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { claimType: 'canAccessProduct' }
  },
  {
    path: 'productDetail/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
    data: { claimType: 'canAccessProduct' }
  },
  {
    path: 'categories',
    component: CategoryListComponent,
    canActivate: [AuthGuard],
    data: { claimType: 'canAccessCategories' }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
