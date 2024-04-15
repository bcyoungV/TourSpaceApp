import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouristePageRoutingModule } from './touriste-routing.module';

import { TouristePage } from './touriste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouristePageRoutingModule
  ],
  declarations: [TouristePage]
})
export class TouristePageModule {}
