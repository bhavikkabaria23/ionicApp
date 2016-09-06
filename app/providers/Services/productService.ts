import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

// Import the product model
import {Product} from '../../models/product'
// Import resource.json file
import * as resources from '../../resources'

/*
  Generated class for product service.  
*/
@Injectable()
export class ProductService {
  products: Product[];

  constructor(public http: Http) { }

  load(): Observable<any> { 
    let res = this.http.get(resources.Path.apiUrl+ '/products')
      .map(response => response.json())        
    return res;
  }
}