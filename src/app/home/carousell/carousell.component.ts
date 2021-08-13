import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CarouselItems } from '../../shared/carousel-item';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class CarousellComponent implements OnInit {
  @ViewChild(NgbCarousel) carousel!: NgbCarousel;
  carouselItems = CarouselItems;

  constructor() { }

  ngOnInit(): void {
  }

  swipe(e: string) {
    if (e === 'swiperight') {
      this.carousel.prev();
    } else {
      this.carousel.next();
    } 
  }
}
