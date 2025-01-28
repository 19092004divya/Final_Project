import { Component } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { IProduct } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product: IProduct={} as IProduct;
  id?: string;
  isEditMode:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private productService:ProductService,
    private router:Router,
    
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']; 
    });

    if(this.id){
      this.productService.getProductsById(this.id)
      .subscribe((responseData: IProduct)=>{
        this.product=responseData;
      });
     
    }
  }
  onEdit(){
    this.router.navigate(['product-upsert',this.id]);
  }
  onBack(){
    this.router.navigate(['/']);
  }
  onDelete(){
    
  }
  onRefresh()
  {
        this.router.navigate(['product-details',this.id]);
  }
}

 