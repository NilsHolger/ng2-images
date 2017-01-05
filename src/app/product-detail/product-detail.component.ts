import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productTitle: string;

  constructor(activatedRoute: ActivatedRoute) {
    this.productTitle = activatedRoute.snapshot.params['prodTitle'];
   }
}
