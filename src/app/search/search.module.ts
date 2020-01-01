import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
