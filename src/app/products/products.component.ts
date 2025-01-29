import { Component, OnInit } from '@angular/core';
import { IProduct } from '../_models/product.model';

import { ProductService } from '../_services/product.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  visibility: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((responseData)=>{
      this.products=responseData;
    });
  }

  
}
