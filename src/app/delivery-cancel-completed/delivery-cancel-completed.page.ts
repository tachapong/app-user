import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-delivery-cancel-completed',
  templateUrl: './delivery-cancel-completed.page.html',
  styleUrls: ['./delivery-cancel-completed.page.scss'],
})
export class DeliveryCancelCompletedPage implements OnInit {

  public title: string = "Delivery company";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  mcontentid = ""
  constructor(private userSvc: UserService, private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      console.log(it);      
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

}
