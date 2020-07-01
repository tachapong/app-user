import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopMenuConfirmPageRoutingModule } from './shop-menu-confirm-routing.module';

import { ShopMenuConfirmPage } from './shop-menu-confirm.page';
import { DirectivesModule } from 'src/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DirectivesModule,
    ShopMenuConfirmPageRoutingModule
  ],
  declarations: [ShopMenuConfirmPage]
})
export class ShopMenuConfirmPageModule {}
