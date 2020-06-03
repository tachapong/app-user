export interface IUserService {

    getCurrentlyOpenedRestaurants(): Promise<any>;
    getRestaurantMenu(restaurantId: string): Promise<any>;
    getProductDetail(productId: string): Promise<any>;
    getOwnOrder(orderId: string): Promise<any>;
}