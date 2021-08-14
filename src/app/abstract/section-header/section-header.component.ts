import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() headerText! : string;
  @Input() subHeading! : string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
