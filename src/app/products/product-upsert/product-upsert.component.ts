import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  form!:FormGroup;
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

    this.initForm();

    if (this.id) {
      this.productService.getProductsById(this.id);
      this.isEditMode = true;
      this.populateForm();
    }
  }

  initForm(){
    this.form=new FormGroup({
      name:new FormControl(null,Validators.required),
      brand:new FormControl(null),
      price:new FormControl(null),
      image:new FormControl(null),
      year:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(4)])
    });
  }

  populateForm(){
    this.form.patchValue({
      name:this.product.name,
      brand:this.product.brand,
      price:this.product.price,
      image:this.product.imageUrl,
      year:this.product.manufacturedYear
    })
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
    this.product.name=this.form.value.name;
    this.product.brand=this.form.value.brand;
    this.product.price=this.form.value.price;
    this.product.imageUrl=this.form.value.image;
    this.product.manufacturedYear=this.form.value.year;

    if (!this.isEditMode) {
          this.product.id = Math.random().toString();
          this.productService.addProduct(this.product).subscribe(()=>{
            this.router.navigateByUrl('/');

          });
          this.product = {
            id: '',
            name: '',
            brand: '',
            price: '',
            imageUrl: '',
            manufacturedYear: ''
          };
        }
        else {
          this.productService.updateProduct(this.product);
          this.router.navigateByUrl(`/product-details/${this.product.id}`);
    
        }

   this.form.reset();
  }
   
   
    // onSubmit() {
    //   if (!this.isEditMode) {
    //     this.product.id = Math.random().toString();
    //     this.productService.addProduct(this.product);
    //     this.product = {
    //       id: '',
    //       name: '',
    //       brand: '',
    //       price: '',
    //       imageUrl: '',
    //       manufacturedYear: ''
    //     };
    //     this.router.navigateByUrl('/');
    //   }
    //   else {
    //     this.productService.updateProduct(this.product);
    //     this.router.navigateByUrl(`/product-details/${this.product.id}`);
  
    //   }





  }

