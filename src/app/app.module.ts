import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductUpsertComponent } from './products/product-upsert/product-upsert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './products/product/product.component';
import { ProductService } from './_services/product.services';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DdComponent } from './dd/dd.component';
import { CardStyleDirective } from './_directives/card-style.directives';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductUpsertComponent,
    ProductComponent,
    ProductCardComponent,
    ProductsComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    DdComponent,
    CardStyleDirective,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
