import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApplicationComponent } from './application/application.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';

import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    ApplicationComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products/:prodId', component: ProductDetailComponent}
    ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ProductService],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
