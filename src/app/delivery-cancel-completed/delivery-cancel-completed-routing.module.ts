import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryCancelCompletedPage } from './delivery-cancel-completed.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryCancelCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryCancelCompletedPageRoutingModule {}
