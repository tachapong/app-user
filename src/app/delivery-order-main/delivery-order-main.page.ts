import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';
import { Router } from '@angular/router';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-delivery-order-main',
  templateUrl: './delivery-order-main.page.html',
  styleUrls: ['./delivery-order-main.page.scss'],
})
export class DeliveryOrderMainPage implements OnInit {

  public title: string = "Delivery company";
  public hasLoaded: string;
  private mcontentid = "637290987388843134";
  public data$ = Promise.resolve([]);
  public statusReceived: boolean = false;
  public statusShipping: boolean = false;
  public statusDone: boolean = false;
  constructor(private userSvc: UserService, private svc: IonManaLib, private router: Router, private parse: ParseDataProvider) { }

  ionViewDidEnter() {
    this.svc.setStateChangedHandler((param) => this.OnStateChanged(param));
    this.getOwnOrder()
    this.refreshCallBack();
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        // return this.svc.getApiData(this.mcontentid);
      })
  }

  private refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    // this.data$ = load$;
    load$.then((it: any) => {
      // this.statusReceived = it.acceptRequestDate != null; 
      // this.statusShipping = it.shippingDate != null;
      // this.statusDone = it.destinationDate != null;
      // this.setUserLocation(it.customer.address, it.customer.latitude, it.customer.longitude, it.customer.phoneNumber, it.customer.remark);

      // console.log(it);
      // this.svc.initPageApi(this.mcontentid);
      // this.hasLoaded = it ? "y" : "n";
    });
  }

  ngOnInit() {
  }

  OnStateChanged(state) {
    this.refreshCallBack();
    
    // switch (state) {
    //   case "recieved":
    //     this.statusRecieved = true;break;
    //   case "shipping":
    //     this.statusRecieved = true;
    //     this.statusShipping = true;break;
    //   case "done":
    //     this.statusRecieved = true;
    //     this.statusShipping = true;
    //     this.statusDone = true;break;
    //   default: break;
    // }
  }

  onCancel(endpoint: string) {
    // TODO : implement endpoint
    console.log(endpoint);
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/api/escrow/cancel/nafmdtl-" + endpoint);
  }

  onDetail() {
    this.router.navigateByUrl("/delivery-order-detail");
  }

  getOwnOrder() {
    this.data$ = this.userSvc.getOwnOrder("637293690098220976");
    this.data$.then((it: any) => {
      this.statusReceived = it.acceptRequestDate != null; 
      this.statusShipping = it.shippingDate != null;
      this.statusDone = it.destinationDate != null;
      this.setUserLocation(it.customer.address, it.customer.latitude, it.customer.longitude, it.customer.phoneNumber, it.customer.remark);

      console.log(it);
    })
  }

  private setUserLocation(address: string, latitude: string, longitude: string, phoneNumber: string, remark: string) {
    this.svc.setGpsSection(address, latitude, longitude, phoneNumber, remark);
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
