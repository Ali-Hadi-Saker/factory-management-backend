//expose safe api
import { contextBridge, ipcRenderer } from "electron";

// Expose safe backend API to React
contextBridge.exposeInMainWorld("api", {
  // Clients
  createClient: (data) =>
    ipcRenderer.invoke("client:create", data),

  getClients: () =>
    ipcRenderer.invoke("client:getAll"),

  // Orders
  createOrder: (order, item) =>
    ipcRenderer.invoke("order:create", order, item),

  getOrders: () =>
    ipcRenderer.invoke("order:getAll"),

  // Payments
  createPayment: (data) =>
    ipcRenderer.invoke("payment:create", data)
});
