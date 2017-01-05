import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService, Product, Review } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product;
  reviews: Review[];

  constructor(activatedRoute: ActivatedRoute, productService: ProductService) {
    let prodId: number = parseInt(activatedRoute.snapshot.params['prodId']);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(prodId);
   }
}
