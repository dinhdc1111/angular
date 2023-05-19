import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { AboutPageComponent } from './page/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomePageComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    NotFoundPageComponent,
    ProductPageComponent,
    DashboardComponent,
    AdminProductComponent,
    AboutPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
