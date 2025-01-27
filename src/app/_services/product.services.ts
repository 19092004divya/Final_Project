import { Injectable } from '@angular/core';
import { IProduct } from '../_models/product.model';
import { LoggerService } from './logger.services';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: IProduct[] = [
    {
      id: '1',
      name: 'Iphone 15 Pro Max',
      brand: 'Apple',
      price: '1600',
      imageUrl:
        'https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=600',
      manufacturedYear: '2024',
    },
    {
      id: '2',
      name: 'Playstation 5',
      brand: 'Sony',
      price: '550',
      imageUrl:
        'https://images.pexels.com/photos/5961216/pexels-photo-5961216.jpeg?auto=compress&cs=tinysrgb&w=600',
      manufacturedYear: '2027',
    },
    {
      id: '3',
      name: 'Samsung Edge',
      brand: 'Samsung',
      price: '340',
      imageUrl:
        'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=600',
      manufacturedYear: '2016',
    },
    {
      id: '4',
      name: 'Nikon 36D',
      brand: 'Nikon',
      price: '2300',
      imageUrl:
        'https://images.pexels.com/photos/1250282/pexels-photo-1250282.jpeg?auto=compress&cs=tinysrgb&w=600',
      manufacturedYear: '2026',
    },
    {
      id: '5',
      name: 'Boat Headphone',
      brand: 'Boat',
      price: '130',
      imageUrl:
        'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=600',
      manufacturedYear: '2024',
    },
    {
      id: '6',
      name: 'Macbook M2',
      brand: 'Apple',
      price: '1800',
      imageUrl:
        'https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg?auto=compress&cs=tinysrgb&w=600',
      manufacturedYear: '2022',
    },
    {
      id: '7',
      name: 'IPhone 11 & Airpods',
      brand: 'Apple',
      price: '1120',
      imageUrl:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
      manufacturedYear: '2024',
    },
    {
      id: '8',
      name: 'Google Pixel 7a',
      brand: 'Goolge',
      price: '450',
      imageUrl:
        'https://images.pexels.com/photos/833337/pexels-photo-833337.png?auto=compress&cs=tinysrgb&w=600',
      manufacturedYear: '2021',
    },
  ];

  constructor(private loggerService: LoggerService) {}

  getProducts(): IProduct[] {
    console.log(this.productList + "helooo");
    return this.productList;
  }

  addProduct(product: IProduct): void {
    this.productList.push(product);
    console.log(product);
    this.loggerService.logInformation('Product Added');
  }

  getProductsById(id: string): IProduct {
    const product = this.productList.find((x) => x.id === id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }

  updateProduct(updateProduct: IProduct): void {
    const index = this.productList.findIndex((product) => product.id === updateProduct.id);
    if (index !== -1) 
    {
      this.productList[index] = updateProduct;
      this.loggerService.logInformation("Product Update Successfully");
    } 
    else 
    {
      throw new Error(`Product with id ${updateProduct.id} not found`);
    }
  }
}
