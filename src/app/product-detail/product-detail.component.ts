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
  newRating: number;
  newComment: string;

  isReviewHidden: boolean = true;

  addReview(){
    let review = new Review(0, this.product.id, new Date(), 'Anonymous',
     this.newRating, this.newComment);
     console.log(`adding review: ${JSON.stringify(review)}`);
     this.reviews = [...this.reviews, review];
     this.product.rating = this.averageRating(this.reviews);
     this.resetForm();

  }

  averageRating(reviews: Review[]){
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }

  constructor(activatedRoute: ActivatedRoute, productService: ProductService) {
    let prodId: number = parseInt(activatedRoute.snapshot.params['prodId']);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(prodId);
   }
}
