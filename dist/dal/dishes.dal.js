"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishesDal = void 0;
const dishes_1 = __importDefault(require("../db/models/dishes"));
const restaurants_1 = __importDefault(require("../db/models/restaurants"));
class DishesDal {
    async createDish(dish) {
        dish = new dishes_1.default({
            name: dish.dishName,
            restaurant: dish.restaurantName,
            description: dish.dishDescription,
            image: dish.dishImage,
            signature: dish.dishSignature,
            price: dish.dishPrice,
            dishType: dish.dishType,
        });
        const response = await dishes_1.default.create(dish);
        const result = await restaurants_1.default.findOne({ name: response.restaurant }).updateOne({
            $push: { dishesRestaurant: response._id },
        });
        return response;
    }
    findAll() {
        return dishes_1.default.find();
    }
}
exports.DishesDal = DishesDal;
