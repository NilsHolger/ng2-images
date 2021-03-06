import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { FilterPipe } from '../filter.pipe';
import { Product, ProductService } from '../product.service';
import 'rxjs/add/operator/debounceTime';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;
  
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.titleFilter.valueChanges
    .debounceTime(200)
    .subscribe(
      value => this.filterCriteria = value,
      error => console.error(error));

      //this.productService.searchEvent.subscribe(
        // searchInput => this.products = this.productService.searchAll(searchInput),
        // error => console.log("can't retrieve products. error code: %s, URL: %s  "),
        // () => console.log('done'));
   }
}
