import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './components/head/head.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[HeadComponent]
})
export class HeadModule { }
