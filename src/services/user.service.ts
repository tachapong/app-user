import { Injectable } from '@angular/core';
import { IUserService } from './iuser';
import { API_URL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  async getCurrentlyOpenedRestaurants(): Promise<any> {
    let apiUrl = this.baseUrl + "GetCurrentlyOpenedRestaurants/";
    return this.http.get(apiUrl).toPromise();
  }

  async getRestaurantMenu(restaurantId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetRestaurantMenu/" + restaurantId;
    return this.http.get(apiUrl).toPromise();
  }

  async getProductDetail(productId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetProductDetail/" + productId;
    return this.http.get(apiUrl).toPromise();
  }

  async getOwnOrder(orderId: string): Promise<any> {
    let apiUrl = this.baseUrl + "GetOwnOrder?endpointid=" + orderId;
    return this.http.get(apiUrl).toPromise();
  }

  private baseUrl: string = API_URL;
  constructor(private http: HttpClient) { }

}
