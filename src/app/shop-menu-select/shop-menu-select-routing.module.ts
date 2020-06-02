import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopMenuSelectPage } from './shop-menu-select.page';

const routes: Routes = [
  {
    path: '',
    component: ShopMenuSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopMenuSelectPageRoutingModule {}
