import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexOverviewComponent } from './flex-overview.component';

describe('FlexOverviewComponent', () => {
  let component: FlexOverviewComponent;
  let fixture: ComponentFixture<FlexOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
