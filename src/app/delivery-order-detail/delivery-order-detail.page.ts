import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-delivery-order-detail',
  templateUrl: './delivery-order-detail.page.html',
  styleUrls: ['./delivery-order-detail.page.scss'],
})
export class DeliveryOrderDetailPage implements OnInit {

  public order$ = Promise.resolve([]);
  constructor(private userSvc: UserService) { }

  ionViewDidEnter() {
    this.getOwnOrder()
  }

  ngOnInit() {
  }

  getOwnOrder() {
    this.order$ = this.userSvc.getOwnOrder("string");
    this.order$.then(it => {
      console.log(it);
    })
  }

}
