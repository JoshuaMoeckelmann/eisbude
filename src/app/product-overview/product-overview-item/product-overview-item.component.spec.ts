import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewItemComponent } from './product-overview-item.component';

describe('ProductOverviewItemComponent', () => {
  let component: ProductOverviewItemComponent;
  let fixture: ComponentFixture<ProductOverviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOverviewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
