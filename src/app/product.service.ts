import { Injectable } from '@angular/core';

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public description: string,
              public categories: Array<string>
              ) {}
}

@Injectable()
export class ProductService {
    getProducts(): Array<Product> {
      return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
    }

}

const products = [
  {
    "id": 0,
    "title": "First Product",
    "price": 1.01,
    "rating": 4.1,
    "description": "this is a short description. lorem ipsum dolor sit amet, consectotur adscipiscing elit.",
    "categories": ["computers"]
  },
    {
    "id": 1,
    "title": "Second Product",
    "price": 2.02,
    "rating": 3.5,
    "description": "this is a short description. lorem ipsum dolor sit amet, consectotur adscipiscing elit.",
    "categories": ["architecture"]
  },
    {
    "id": 2,
    "title": "Third Product",
    "price": 3.03,
    "rating": 4.2,
    "description": "this is a short description. lorem ipsum dolor sit amet, consectotur adscipiscing elit.",
    "categories": ["nature"]
  },
    {
    "id": 3,
    "title": "Fourth Product",
    "price": 4.04,
    "rating": 3.9,
    "description": "this is a short description. lorem ipsum dolor sit amet, consectotur adscipiscing elit.",
    "categories": ["landscapes"]
  },
    {
    "id": 4,
    "title": "Fifth Product",
    "price": 5.05,
    "rating": 4.6,
    "description": "this is a short description. lorem ipsum dolor sit amet, consectotur adscipiscing elit.",
    "categories": ["oxygen"]
  }
]
