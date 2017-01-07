import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  formModel: FormGroup;
  categories: string[];

  constructor(private productService: ProductService) {
    this.categories = productService.getAllCategories();
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'title': [null, Validators.minLength(3)],
      'price': [null, positiveNumberValidator],
      'category': [-1]
    })
   }
   
   onSearch(): any {
     if (this.formModel.valid){
       console.log(this.formModel.value);
       this.productService.searchEvent.emit(this.formModel.value);
     }
   }
}
  function positiveNumberValidator(control: FormControl): any{
          if (!control.value) { return null;}
          const price = parseInt(control.value);
          return price === null || typeof price === 'number' && price > 0 ?
          null : {positivenumber: true};
   }
