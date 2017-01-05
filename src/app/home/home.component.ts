import { Component } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
   }

}
