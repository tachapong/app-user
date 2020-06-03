import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-shop-menu-select',
  templateUrl: './shop-menu-select.page.html',
  styleUrls: ['./shop-menu-select.page.scss'],
})
export class ShopMenuSelectPage implements OnInit {
  category: any[];
  public hasLoaded: string;
  public data$ = Promise.resolve([]);
  public segmentValue: any;

  constructor(public actionSheetController: ActionSheetController, private userSvc: UserService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = 'null';
    this.data$ = this.userSvc.getRestaurantMenu('1');
    this.data$.then((it: any) => {
      let qry = it && it.menu.filter(i => i.products.length > 0);
      this.category = qry[0].categoryId;
      this.segmentChanged(qry[0].categoryId);
      this.hasLoaded = (it != null) ? "y" : "n";
    })
  }

  segmentChanged(id: any) {
    this.segmentValue = id;
  }
}
