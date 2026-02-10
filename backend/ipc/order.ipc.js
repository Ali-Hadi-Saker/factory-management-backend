import { ipcMain } from "electron";
import { OrderService } from "../services/order.service.js";

// Create order + related item
ipcMain.handle("order:create", (_, orderData, itemData) => {
  return OrderService.createOrder(orderData, itemData);
});

// Get all active orders
ipcMain.handle("order:getAll", () => {
  return OrderService.getAllOrders();
});

// Get order with its item
ipcMain.handle("order:getById", (_, id) => {
  return OrderService.getOrderById(id);
});

// Update order and item
ipcMain.handle("order:update", (_, id, orderData, itemData) => {
  return OrderService.updateOrder(id, orderData, itemData);
});

// Archive order
ipcMain.handle("order:archive", (_, id) => {
  return OrderService.archiveOrder(id);
});
