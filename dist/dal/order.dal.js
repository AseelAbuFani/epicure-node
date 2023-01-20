"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDal = void 0;
const users_1 = __importDefault(require("../db/models/users"));
const order_1 = __importDefault(require("../db/models/order"));
class OrderDal {
    async createOrder(order) {
        order = new order_1.default({
            dish: order.dish,
            quantity: order.quantity,
            side: order.side,
            changes: order.changes,
        });
        const response = await order_1.default.create(order);
        const result = await users_1.default.findOne({ email: response.user }).updateOne({
            $push: { pendingOrder: response._id },
        });
        return response;
    }
    findAll() {
        return order_1.default.find();
    }
}
exports.OrderDal = OrderDal;
