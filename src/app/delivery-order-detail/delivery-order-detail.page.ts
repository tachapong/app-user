import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-delivery-order-detail',
  templateUrl: './delivery-order-detail.page.html',
  styleUrls: ['./delivery-order-detail.page.scss'],
})
export class DeliveryOrderDetailPage implements OnInit {

  public title: string = "";
  public hasLoaded: string;
  private mcontentid = "637290989254530299";
  public data$ = Promise.resolve([]);
  constructor(private userSvc: UserService, private svc: IonManaLib, private parse: ParseDataProvider) { }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.svc.initPageApi(this.mcontentid);
      this.hasLoaded = it ? "y" : "n";
    });
  }
  
  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
        // this.userSvc.getOwnOrder("637293690098220976");
      })
  }

  ngOnInit() {
  }
  
  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
