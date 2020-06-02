import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryReceiveConfirmPage } from './delivery-receive-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryReceiveConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryReceiveConfirmPageRoutingModule {}
