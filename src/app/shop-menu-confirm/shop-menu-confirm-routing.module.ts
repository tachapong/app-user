import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopMenuConfirmPage } from './shop-menu-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ShopMenuConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopMenuConfirmPageRoutingModule {}
