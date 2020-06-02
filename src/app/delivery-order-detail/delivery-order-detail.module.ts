import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryOrderDetailPageRoutingModule } from './delivery-order-detail-routing.module';

import { DeliveryOrderDetailPage } from './delivery-order-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryOrderDetailPageRoutingModule
  ],
  declarations: [DeliveryOrderDetailPage]
})
export class DeliveryOrderDetailPageModule {}
