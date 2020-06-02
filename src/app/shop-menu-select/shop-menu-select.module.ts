import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopMenuSelectPageRoutingModule } from './shop-menu-select-routing.module';

import { ShopMenuSelectPage } from './shop-menu-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopMenuSelectPageRoutingModule
  ],
  declarations: [ShopMenuSelectPage]
})
export class ShopMenuSelectPageModule {}
