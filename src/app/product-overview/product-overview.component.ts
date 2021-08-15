import { Component, OnInit } from '@angular/core';
import { products } from '../shared/products';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
