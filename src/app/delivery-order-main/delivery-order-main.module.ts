import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryOrderMainPageRoutingModule } from './delivery-order-main-routing.module';

import { DeliveryOrderMainPage } from './delivery-order-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryOrderMainPageRoutingModule
  ],
  declarations: [DeliveryOrderMainPage]
})
export class DeliveryOrderMainPageModule {}
