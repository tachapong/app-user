import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopSelectPageRoutingModule } from './shop-select-routing.module';

import { ShopSelectPage } from './shop-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopSelectPageRoutingModule
  ],
  declarations: [ShopSelectPage]
})
export class ShopSelectPageModule {}
