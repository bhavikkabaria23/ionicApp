import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import the Product model
import {Product} from '../../models/product'

// Import ProductService providers
import {ProductService} from '../../providers/Services/productService';

/*
  Generated class for the product page.    
*/
@Component({
  templateUrl: 'build/pages/products/products.html',
})
export class ProductsPage {
 // Declare products as an array of User model
  products: Product[];
  constructor(private nav: NavController, private productService: ProductService) {
    // productService
    //   .load()    
    //   .then(pro => this.products = pro)
      productService.load().subscribe(res => this.products = res)            
  }
}
