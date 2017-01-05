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
export class Review {
    constructor(
              public id: number,
              public productId: number,
              public timestamp: Date,
              public user: string,
              public rating: number,
              public comment: string
     ) {}
}

@Injectable()
export class ProductService {
    getProducts(): Array<Product> {
      return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
    }
    getProductById(productId: number): Product {
      return products.find(p => p.id === productId);
    }
    getReviewsForProduct(productId: number): Review[]{
      return reviews.filter(r => r.productId === productId)
                    .map(r => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));

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
];

const reviews = [
      {
          "id": 0,
          "productId": 0,
          "timestamp": "2017-01-04T02:17:00+00:00",
          "user": "User 1",
          "rating": 5,
          "comment": "aenean vestibulum velit id placerat posuere. praesent placerat mi ut massa tempor, sed rutrum metus rutrum. fusce lacinia blandit ligula eu cursus. proin in lobortis mi. praesent pellentesque auctor dictum. nunc volutpat id nibh quis malesuada. curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. praesent non lectus nec dui venenatis pretium."
      },
      {
          "id": 1,
          "productId": 0,
          "timestamp": "2017-01-04T02:53:00+00:00",
          "user": "User 2",
          "rating": 3,
          "comment": "aenean vestibulum velit id placerat posuere. praesent placerat mi ut massa tempor, sed rutrum metus rutrum. fusce lacinia blandit ligula eu cursus. proin in lobortis mi. praesent pellentesque auctor dictum. nunc volutpat id nibh quis malesuada. curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. praesent non lectus nec dui venenatis pretium."
      },
          {
          "id": 2,
          "productId": 0,
          "timestamp": "2017-01-04T05:26:00+00:00",
          "user": "User 3",
          "rating": 4,
          "comment": "aenean vestibulum velit id placerat posuere. praesent placerat mi ut massa tempor, sed rutrum metus rutrum. fusce lacinia blandit ligula eu cursus. proin in lobortis mi. praesent pellentesque auctor dictum. nunc volutpat id nibh quis malesuada. curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. praesent non lectus nec dui venenatis pretium."
      },
      {
          "id": 3,
          "productId": 0,
          "timestamp": "2017-01-04T07:20:00+00:00",
          "user": "User 4",
          "rating": 4,
          "comment": "aenean vestibulum velit id placerat posuere. praesent placerat mi ut massa tempor, sed rutrum metus rutrum. fusce lacinia blandit ligula eu cursus. proin in lobortis mi. praesent pellentesque auctor dictum. nunc volutpat id nibh quis malesuada. curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. praesent non lectus nec dui venenatis pretium."
      },
      {
          "id": 4,
          "productId": 0,
          "timestamp": "2017-01-04T11:35:00+00:00",
          "user": "User 5",
          "rating": 5,
          "comment": "aenean vestibulum velit id placerat posuere. praesent placerat mi ut massa tempor, sed rutrum metus rutrum. fusce lacinia blandit ligula eu cursus. proin in lobortis mi. praesent pellentesque auctor dictum. nunc volutpat id nibh quis malesuada. curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. praesent non lectus nec dui venenatis pretium."
      },
      {
          "id": 5,
          "productId": 0,
          "timestamp": "2017-01-04T11:42:00+00:00",
          "user": "User 6",
          "rating": 5,
          "comment": "aenean vestibulum velit id placerat posuere. praesent placerat mi ut massa tempor, sed rutrum metus rutrum. fusce lacinia blandit ligula eu cursus. proin in lobortis mi. praesent pellentesque auctor dictum. nunc volutpat id nibh quis malesuada. curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. praesent non lectus nec dui venenatis pretium."
      }
  ];
