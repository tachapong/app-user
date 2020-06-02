import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopMenuConfirmPageRoutingModule } from './shop-menu-confirm-routing.module';

import { ShopMenuConfirmPage } from './shop-menu-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopMenuConfirmPageRoutingModule
  ],
  declarations: [ShopMenuConfirmPage]
})
export class ShopMenuConfirmPageModule {}
