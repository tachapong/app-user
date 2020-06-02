import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryReceiveConfirmPageRoutingModule } from './delivery-receive-confirm-routing.module';

import { DeliveryReceiveConfirmPage } from './delivery-receive-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryReceiveConfirmPageRoutingModule
  ],
  declarations: [DeliveryReceiveConfirmPage]
})
export class DeliveryReceiveConfirmPageModule {}
