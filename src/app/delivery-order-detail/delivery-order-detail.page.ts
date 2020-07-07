import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-delivery-order-detail',
  templateUrl: './delivery-order-detail.page.html',
  styleUrls: ['./delivery-order-detail.page.scss'],
})
export class DeliveryOrderDetailPage implements OnInit {

  public title: string = "";
  public hasLoaded: string;
  private mcontentid = "637290989254530299";
  public data$: Observable<object>;;
  constructor(private userSvc: UserService, private svc: IonManaLib, private parse: ParseDataProvider, private activateRoute: ActivatedRoute) {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid)
    this.data$ = this.activateRoute.paramMap.pipe(() => window.history.state);    
  }

  // private loadData$() {
  //   return this.svc.initPageApi(this.mcontentid)
  //     .then(_ => {
  //       return this.svc.getApiData(this.mcontentid);
  //     })
  // }

  ngOnInit() {
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
