import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryOrderMainPage } from './delivery-order-main.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryOrderMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryOrderMainPageRoutingModule {}
