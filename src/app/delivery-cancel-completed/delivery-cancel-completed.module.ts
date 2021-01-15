import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryCancelCompletedPageRoutingModule } from './delivery-cancel-completed-routing.module';

import { DeliveryCancelCompletedPage } from './delivery-cancel-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryCancelCompletedPageRoutingModule
  ],
  declarations: [DeliveryCancelCompletedPage]
})
export class DeliveryCancelCompletedPageModule {}
