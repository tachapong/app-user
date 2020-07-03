import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IonManaLib } from 'ion-m-lib';
import { Router } from '@angular/router';

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
  constructor(private userSvc: UserService, private svc: IonManaLib, private router: Router) { }

  ionViewDidEnter() {
    this.svc.setStateChangedHandler((param) => this.OnStateChanged(param));

    this.getOwnOrder()

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

  OnStateChanged(state) {
    switch (state) {
      case "a": ;
      case "b": ;
      case "c": ;
      default: ;
    }
  }

  onCancel(endpoint: string){
    // TODO : implement endpoint
    console.log(endpoint);    
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/api/escrow/cancel/nafmdtl-" + endpoint);
  }

  onDetail(){
    this.router.navigateByUrl("/delivery-order-detail");
  }

  getOwnOrder() {
    this.data$ = this.userSvc.getOwnOrder("string");
    this.data$.then(it=>{
      console.log(it);
    })
  }
}
