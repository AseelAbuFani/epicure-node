import Users from "../db/models/users";
import Order from "../db/models/order";

export class OrderDal {
  public async createOrder(order: any) {
    order = new Order({
      dish: order.dish,
      quantity: order.quantity,
      side:order.side,
      changes:order.changes,
    });

    const response = await Order.create(order);
    const result = await Users.findOne({ email: response.user }).updateOne({
      $push: { pendingOrder: response._id },
    });
    return response;
  }

  public findAll() {
    return Order.find();
  }
}
