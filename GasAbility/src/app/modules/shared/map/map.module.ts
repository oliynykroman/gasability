import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  providers: [
    Geolocation,
    NativeGeocoder
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
