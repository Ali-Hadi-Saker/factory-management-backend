import { PaymentModel } from "../models/payment.model.js";

export const PaymentService = {
  createPayment: (data) => {
    return PaymentModel.create(data);
  },

  getPaymentsByOrder: (order_id) => {
    return PaymentModel.getByOrderId(order_id);
  }
};
