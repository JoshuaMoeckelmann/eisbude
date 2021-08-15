import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/products';

@Component({
  selector: 'app-product-overview-item',
  templateUrl: './product-overview-item.component.html',
  styleUrls: ['./product-overview-item.component.scss']
})
export class ProductOverviewItemComponent implements OnInit {
  @Input() product!: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
