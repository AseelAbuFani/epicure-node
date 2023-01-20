"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishesController = void 0;
const dishes_service_1 = require("../services/dishes.service");
class DishesController {
    static async getDishes(req, res) {
        const service = new dishes_service_1.DishesService();
        const dishes = await service.getDishes();
        return res.send(dishes);
    }
    static async createDish(req, res) {
        const params = req.body;
        const service = new dishes_service_1.DishesService();
        const dish = await service.createDish(params);
        return res.send(dish);
    }
}
exports.DishesController = DishesController;
