import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurIceComponent } from './our-ice.component';

describe('OurIceComponent', () => {
  let component: OurIceComponent;
  let fixture: ComponentFixture<OurIceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurIceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurIceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
