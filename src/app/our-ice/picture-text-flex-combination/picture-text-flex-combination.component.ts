import { Component, OnInit } from '@angular/core';
import { FlexOverviewItems } from 'src/app/shared/flex-overview-item';

@Component({
  selector: 'app-picture-text-flex-combination',
  templateUrl: './picture-text-flex-combination.component.html',
  styleUrls: ['./picture-text-flex-combination.component.scss']
})
export class PictureTextFlexCombinationComponent implements OnInit {
  flexOverviewItems = FlexOverviewItems;
  constructor() { }

  ngOnInit(): void {
  }

}
