import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-shop-menu-select',
  templateUrl: './shop-menu-select.page.html',
  styleUrls: ['./shop-menu-select.page.scss'],
})
export class ShopMenuSelectPage implements OnInit {

  category: any[];
  public segmentValue: any;
  public title: string = "Delivery";
  public hasLoaded: string;
  public data$ = Promise.resolve([]);
  mcontentid = "637290986683348830"
  constructor(public actionSheetController: ActionSheetController, private userSvc: UserService, private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = 'null';
    // this.data$ = this.userSvc.getRestaurantMenu('1');
    // this.data$.then((it: any) => {
    //   let qry = it && it.menu.filter(i => i.products.length > 0);
    //   this.category = qry[0].categoryId;
    //   this.segmentChanged(qry[0].categoryId);
    //   this.hasLoaded = (it != null) ? "y" : "n";
    // })
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      let qry = it && it.menu.filter(i => i.products.length > 0);
      this.category = qry[0].categoryId;
      this.segmentChanged(qry[0].categoryId);
      this.svc.initPageApi(this.mcontentid);
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  segmentChanged(id: any) {
    this.segmentValue = id;
  }

  onSelect(productId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/npdtdtl-" + productId);
  }
}
