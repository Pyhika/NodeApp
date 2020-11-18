import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService{
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getProducts(): Observable<any> {
    return this.http.get('/api/v1/products');
  }

  // tslint:disable-next-line:typedef
  getProductById(productId: string): Observable<any> {
    return this.http.get('/api/v1/products/' + productId);
  }
}
