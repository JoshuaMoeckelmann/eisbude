import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CarousellComponent } from './home/carousell/carousell.component';
import { ProductDisplayComponent } from './home/product-display/product-display.component';
import { OurIceComponent } from './our-ice/our-ice.component';
import { SectionHeaderComponent } from './abstract/section-header/section-header.component';
import { PictureTextFlexCombinationComponent } from './our-ice/picture-text-flex-combination/picture-text-flex-combination.component';
import { FlexOverviewComponent } from './abstract/flex-overview/flex-overview.component';
import { ImageComponent } from './abstract/image/image.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'our-ice', component: OurIceComponent },
    ]),
    NgbModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductListItemComponent,
    HomeComponent,
    CarousellComponent,
    ProductDisplayComponent,
    OurIceComponent,
    SectionHeaderComponent,
    PictureTextFlexCombinationComponent,
    FlexOverviewComponent,
    ImageComponent,
    ProductOverviewComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
