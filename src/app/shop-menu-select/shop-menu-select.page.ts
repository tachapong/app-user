import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-shop-menu-select',
  templateUrl: './shop-menu-select.page.html',
  styleUrls: ['./shop-menu-select.page.scss'],
})
export class ShopMenuSelectPage implements OnInit {
  category: any[];
  public segmentValue: any;

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  segmentChanged(id: any) {
    this.segmentValue = id;
  }
}
