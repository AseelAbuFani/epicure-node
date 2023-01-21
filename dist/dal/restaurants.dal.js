"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsDal = void 0;
const chefs_1 = __importDefault(require("../db/models/chefs"));
const restaurants_1 = __importDefault(require("../db/models/restaurants"));
class RestaurantsDal {
    async createRestaurant(restaurant) {
        restaurant = new restaurants_1.default({
            name: restaurant.restaurantName,
            chef: restaurant.chefName,
            image: restaurant.image,
            rating: restaurant.rating,
            yearOfEstablishmented: restaurant.yearOfEstablishmented,
            open: restaurant.open,
        });
        const response = await restaurants_1.default.create(restaurant);
        const result = await chefs_1.default.findOne({ name: response.chef }).updateOne({
            $push: { chefsRestaurants: response._id },
        });
        return response;
    }
    findAll() {
        return restaurants_1.default.find();
    }
    async updateRestaurant(restaurant) {
        const data = await restaurants_1.default.findOne({
            _id: restaurant._id,
        }).updateOne({ $set: { name: restaurant.name, chef: restaurant.chef } });
        return data;
    }
}
exports.RestaurantsDal = RestaurantsDal;
