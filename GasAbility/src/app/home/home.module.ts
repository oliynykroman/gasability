import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeadModule } from '../modules/shared/head/head.module';
import { SearchModule } from '../modules/shared/search/search.module';
import { MapModule } from '../modules/shared/map/map.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchModule,
    HeadModule,
    MapModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
