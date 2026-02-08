import { OrderModel } from "../models/order.model.js";
import { ItemModel } from "../models/item.model.js";

export const OrderService = {
  createOrder: (orderData, itemData) => {
    // 1️⃣ Create order
    const orderId = OrderModel.create(orderData);

    // 2️⃣ Create item for this order
    itemData.order_id = orderId;
    ItemModel.create(itemData);

    return orderId;
  },

  getAllOrders: () => {
    return OrderModel.getAll();
  },

  getOrderById: (id) => {
    const order = OrderModel.getById(id);
    const item = ItemModel.getByOrderId(id);
    return { ...order, item };
  },

  updateOrder: (id, orderData, itemData) => {
    OrderModel.update(id, orderData);
    ItemModel.update(id, itemData);
    return id;
  },

  archiveOrder: (id) => {
    return OrderModel.archive(id);
  }
};
