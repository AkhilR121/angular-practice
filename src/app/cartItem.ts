import { FoodDataType } from "./food-data-type";

export class CartItem {

    constructor(food: FoodDataType) {
        // Storing foodDataType data in food variable
        this.food = food
        this.price
        this.quantity
    }

    food: FoodDataType;
    quantity:number = 1;
    
    public get price(): number {
        return this.food.price * this.quantity
    }
    
}