import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousellComponent } from './carousell.component';

describe('CarousellComponent', () => {
  let component: CarousellComponent;
  let fixture: ComponentFixture<CarousellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
