import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureTextFlexCombinationComponent } from './picture-text-flex-combination.component';

describe('PictureTextFlexCombinationComponent', () => {
  let component: PictureTextFlexCombinationComponent;
  let fixture: ComponentFixture<PictureTextFlexCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureTextFlexCombinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureTextFlexCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
