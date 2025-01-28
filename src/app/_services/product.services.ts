import { Injectable } from '@angular/core';
import { IProduct } from '../_models/product.model';
import { LoggerService } from './logger.services';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const BASE_URL = "https://angular-aaff1-default-rtdb.firebaseio.com";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: IProduct[] = [];

  constructor(
    private loggerService: LoggerService,
    private http: HttpClient
  ) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<{ [key: string]: IProduct }>(BASE_URL + '/product.json').pipe(
      map((responseData) => {
        const products: IProduct[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            const product = { ...responseData[key], id: key };
            products.push(product);
          }
        }
        return products;
      })
    );
  }

  addProduct(product: IProduct): Observable<any> {
    const customProduct = {
      name: product.name,
      brand: product.brand,
      price: product.price,
      imageUrl: product.imageUrl,
      manufacturedYear: product.manufacturedYear
    };
    return this.http.post(BASE_URL + '/product.json', customProduct);
  }

  getProductsById(id: string) {
    return this.http.get(BASE_URL+`/product/${id}.json`).pipe(
      map((responseData)=>{
        return {...responseData,id};
      }));
    
  }

  updateProduct(updateProduct: IProduct): void {
    const index = this.productList.findIndex((product) => product.id === updateProduct.id);
    if (index !== -1) {
      this.productList[index] = updateProduct;
      this.loggerService.logInformation("Product Update Successfully");
    } else {
      throw new Error(`Product with id ${updateProduct.id} not found`);
    }
  }
}
