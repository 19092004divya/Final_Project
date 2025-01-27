import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { IProduct } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.services';


@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrls: ['./product-upsert.component.scss'],
  // providers: [ProductService],
})
export class ProductUpsertComponent implements OnInit {

  product: IProduct = {
    id: '',
    name: '',
    brand: '',
    price: '',
    imageUrl: '',
    manufacturedYear: ''
  };

  id: string = '';

  isEditMode: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    if (this.id) {
      this.product = this.productService.getProductsById(this.id);
      this.isEditMode = true;
    }
  }
  onBack() {
    if (this.isEditMode) {
      this.router.navigateByUrl(`/product-details/${this.product.id}`);
    }
    else {
      this.router.navigateByUrl('/');
    }

  }

  onSubmit() {
    if (!this.isEditMode) {
      this.product.id = Math.random().toString();
      this.productService.addProduct(this.product);
      this.product = {
        id: '',
        name: '',
        brand: '',
        price: '',
        imageUrl: '',
        manufacturedYear: ''
      };
      this.router.navigateByUrl('/');
    }
    else {
      this.productService.updateProduct(this.product);
      this.router.navigateByUrl(`/product-details/${this.product.id}`);

    }





  }
}
