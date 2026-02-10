import { ipcMain } from "electron";
import { ClientService } from "../services/client.service.js";

// Create new client
ipcMain.handle("client:create", (_, data) => {
  return ClientService.createClient(data);
});

// Get all active clients
ipcMain.handle("client:getAll", () => {
  return ClientService.getAllClients();
});

// Get single client by ID
ipcMain.handle("client:getById", (_, id) => {
  return ClientService.getClientById(id);
});

// Update client info
ipcMain.handle("client:update", (_, id, data) => {
  return ClientService.updateClient(id, data);
});

// Soft delete (archive) client
ipcMain.handle("client:archive", (_, id) => {
  return ClientService.archiveClient(id);
});
