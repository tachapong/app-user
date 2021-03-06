import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';
import { Router, ActivatedRoute } from '@angular/router';
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
  public statusCancel: boolean = false;
  public dateReceived: Date;
  public dateShipping: Date;
  public dateDone: Date;
  private dataParam: any;
  constructor(private userSvc: UserService, private svc: IonManaLib, private router: Router, private parse: ParseDataProvider, private activateRoute: ActivatedRoute) { }

  ionViewDidEnter() {
    this.svc.setStateChangedHandler((param) => this.OnStateChanged(param));
    this.refreshCallBack();
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
        // return this.userSvc.getOwnOrder("neschfd-86");
      })
  }

  private refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      console.log(it);
      
      this.dataParam = it;
      this.statusReceived = it.acceptRequestDate != null;
      this.statusShipping = it.shippingDate != null;
      this.statusDone = it.destinationDate != null;
      this.statusCancel = it.cancelRequestId != null;
      this.dateReceived = it.acceptRequestDate ? it.acceptRequestDate : null;
      this.dateShipping = it.shippingDate ? it.shippingDate : null;
      this.dateDone = it.destinationDate ? it.destinationDate : null;
      this.setUserLocation(it.customer.address, it.customer.latitude, it.customer.longitude, it.customer.phoneNumber, it.customer.remark);
      this.title = it.delivery.name;
      console.log(it);
      this.svc.initPageApi(this.mcontentid);
      this.hasLoaded = it ? "y" : "n";
    });
  }

  ngOnInit() {
  }

  OnStateChanged(state: string) {
    // let loadState$ = this.svc.getApiData(this.mcontentid);
    // this.data$ = loadState$;
    // loadState$.then((it: any) => {
    //   this.statusReceived = it.acceptRequestDate != null;
    //   this.statusShipping = it.shippingDate != null;
    //   this.statusDone = it.destinationDate != null;
    //   this.hasLoaded = it ? "y" : "n";
    // });    
    switch (state.toLowerCase()) {
      case "acceptrequest":
        this.statusReceived = true;
        this.statusCancel = false;
        this.dateReceived = new Date();
        break;
      case "shipping":
        this.statusShipping = true;
        this.statusCancel = false;
        this.dateShipping = new Date();
        break;
      case "destination":
        this.statusDone = true;
        this.statusCancel = false;
        this.dateDone = new Date();
        break;
      case "cancelrequest":
        this.statusCancel = true;
        break;
      default: break;
    }
  }

  onCancel(endpoint: string) {
    var endpointSplitted  = endpoint.split('-');
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/api/escrow/cancel/nafmdtl-" + endpointSplitted[1]);
  }

  onDetail() {
    // this.router.navigate(['/delivery-order-detail'], { queryParams: this.dataParam });
    this.router.navigateByUrl('/delivery-order-detail', { state: this.dataParam });

  }

  private setUserLocation(address: string, latitude: string, longitude: string, phoneNumber: string, remark: string) {
    this.svc.setGpsSection(address, latitude, longitude, phoneNumber, remark);
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
