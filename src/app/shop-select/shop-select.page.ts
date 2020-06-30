import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-shop-select',
  templateUrl: './shop-select.page.html',
  styleUrls: ['./shop-select.page.scss'],
})
export class ShopSelectPage implements OnInit {

  public title: string = "Delivery";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  mcontentid = "637290984294796854"
  constructor(private userSvc: UserService, private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.data$ = this.userSvc.getCurrentlyOpenedRestaurants();
    this.hasLoaded = null;
    let load$ = this.loadData$();
    // this.data$ = load$;
    load$.then(it => {
      console.log(it);      
      this.svc.initPageApi(this.mcontentid);
      // this.hasLoaded = it ? "y" : "n";
    });
  }
  
  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        // return this.svc.getApiData(this.mcontentid);
      })
  }

}
