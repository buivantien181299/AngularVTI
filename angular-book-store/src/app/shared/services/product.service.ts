import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Subject, throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private newProduct = new Subject<Product>();
  $newProduct = this.newProduct.asObservable();

  constructor(private http: HttpClient) { }

  createProduct(product: Product) {
    this.newProduct.next(product);
    return this.http.post('https://fir-98972.firebaseio.com/product.json', product);
  }

  getProducts(){
    return this.http.get('https://fir-98972.firebaseio.com/product.json').pipe(
      map(data => {
        const products: Product[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            products.push(new Product({...data[key], id: key}));
          }
        }
        return products;
      })
    );
  }
  deleteProduct(pid) {
    return this.http.delete(`https://fir-98972.firebaseio.com/product/${pid}.json`);
  }
  updateProduct(product: Product) {
    const pid = product.id;
    delete product.id;
    return this.http.put(`https://fir-98972.firebaseio.com/product/${pid}.json`, product);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }



}
