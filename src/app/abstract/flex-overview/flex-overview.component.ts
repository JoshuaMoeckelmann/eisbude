import { Component, Input, OnInit } from '@angular/core';
import { FlexOverviewItem } from 'src/app/shared/flex-overview-item';

@Component({
  selector: 'app-flex-overview',
  templateUrl: './flex-overview.component.html',
  styleUrls: ['./flex-overview.component.scss']
})
export class FlexOverviewComponent implements OnInit {
  @Input() flexOverViewItem!: FlexOverviewItem;
  @Input() leftAlligned!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
