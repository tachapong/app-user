import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-delivery-order-main',
  templateUrl: './delivery-order-main.page.html',
  styleUrls: ['./delivery-order-main.page.scss'],
})
export class DeliveryOrderMainPage implements OnInit {

  public order$ = Promise.resolve([]);
  constructor(private userSvc: UserService) { }

  ionViewDidEnter() {
    this.getOwnOrder()
  }

  ngOnInit() {
  }

  getOwnOrder() {
    this.order$ = this.userSvc.getOwnOrder("string");
    this.order$.then(it=>{
      console.log(it);
    })
  }
}
