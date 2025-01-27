import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IProduct } from 'src/app/_models/product.model';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @Input()
  product!: IProduct; 

  onDetailsPage(){
    this.router.navigate(['product-details',this.product.id])
  }
}
