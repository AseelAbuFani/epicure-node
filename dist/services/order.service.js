"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const order_dal_1 = require("../dal/order.dal");
class OrderService {
    async getOrder() {
        const dal = new order_dal_1.OrderDal();
        const res = await dal.findAll();
        return res;
    }
    async createOrder(order) {
        const dal = new order_dal_1.OrderDal();
        const res = dal.createOrder(order);
        return res;
    }
}
exports.OrderService = OrderService;
