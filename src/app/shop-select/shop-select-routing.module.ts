import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopSelectPage } from './shop-select.page';

const routes: Routes = [
  {
    path: '',
    component: ShopSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopSelectPageRoutingModule {}
