import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-shop-menu-confirm',
  templateUrl: './shop-menu-confirm.page.html',
  styleUrls: ['./shop-menu-confirm.page.scss'],
})
export class ShopMenuConfirmPage implements OnInit {

  public title: string = "";
  public hasLoaded: string;
  private mcontentid = "637290987131938444";
  public data$ = Promise.resolve([]);
  constructor(private userSvc: UserService, private svc: IonManaLib) { }

  ionViewDidEnter() {
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
  
  ngOnInit() {
  }

}
