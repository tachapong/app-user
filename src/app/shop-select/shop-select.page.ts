import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-shop-select',
  templateUrl: './shop-select.page.html',
  styleUrls: ['./shop-select.page.scss'],
})
export class ShopSelectPage implements OnInit {

  openedRestaurantList$ = Promise.resolve([]);
  
  constructor(private userSvc: UserService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.openedRestaurantList$ = this.userSvc.getCurrentlyOpenedRestaurants();
    this.openedRestaurantList$.then((it)=>{console.log(it);});
  }

}
