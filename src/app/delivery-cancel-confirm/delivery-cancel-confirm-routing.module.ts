import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryCancelConfirmPage } from './delivery-cancel-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryCancelConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryCancelConfirmPageRoutingModule {}
