import { Component, OnInit } from '@angular/core';
import { IProduct } from './_models/product.model';
import { ProductService } from './_services/product.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:[ProductService]
})
export class AppComponent implements OnInit {
 products:IProduct[]=[];
 constructor(private productService:ProductService){}

 ngOnInit(){
  // this.productService.getProducts();
 }
}
 
