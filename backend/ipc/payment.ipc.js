import { ipcMain } from "electron";
import { PaymentService } from "../services/payment.service.js";

// Add payment to order
ipcMain.handle("payment:create", (_, data) => {
  return PaymentService.createPayment(data);
});

// Get all payments for an order
ipcMain.handle("payment:getByOrder", (_, orderId) => {
  return PaymentService.getPaymentsByOrder(orderId);
});
