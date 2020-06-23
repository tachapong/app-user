import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'shop-select',
    loadChildren: () => import('./shop-select/shop-select.module').then( m => m.ShopSelectPageModule)
  },
  {
    path: 'shop-menu-select',
    loadChildren: () => import('./shop-menu-select/shop-menu-select.module').then( m => m.ShopMenuSelectPageModule)
  },
  {
    path: 'shop-menu-confirm',
    loadChildren: () => import('./shop-menu-confirm/shop-menu-confirm.module').then( m => m.ShopMenuConfirmPageModule)
  },
  {
    path: 'delivery-order-main',
    loadChildren: () => import('./delivery-order-main/delivery-order-main.module').then( m => m.DeliveryOrderMainPageModule)
  },
  {
    path: 'delivery-cancel-confirm',
    loadChildren: () => import('./delivery-cancel-confirm/delivery-cancel-confirm.module').then( m => m.DeliveryCancelConfirmPageModule)
  },
  {
    path: 'delivery-order-detail',
    loadChildren: () => import('./delivery-order-detail/delivery-order-detail.module').then( m => m.DeliveryOrderDetailPageModule)
  },
  {
    path: 'delivery-receive-confirm',
    loadChildren: () => import('./delivery-receive-confirm/delivery-receive-confirm.module').then( m => m.DeliveryReceiveConfirmPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
