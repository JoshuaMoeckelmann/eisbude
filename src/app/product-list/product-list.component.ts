import { Component, OnInit } from '@angular/core';

import { products } from '../shared/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = products;
  
}
