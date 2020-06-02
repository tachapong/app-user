import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryCancelConfirmPageRoutingModule } from './delivery-cancel-confirm-routing.module';

import { DeliveryCancelConfirmPage } from './delivery-cancel-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DeliveryCancelConfirmPageRoutingModule
  ],
  declarations: [DeliveryCancelConfirmPage]
})
export class DeliveryCancelConfirmPageModule {}
