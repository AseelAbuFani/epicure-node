"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("../services/order.service");
class OrderController {
    static async getOrder(req, res) {
        const service = new order_service_1.OrderService();
        const order = await service.getOrder();
        return res.send(order);
    }
    static async createOrder(req, res) {
        const params = req.body;
        const service = new order_service_1.OrderService();
        const order = await service.createOrder(params);
        return res.send(order);
    }
}
exports.OrderController = OrderController;
