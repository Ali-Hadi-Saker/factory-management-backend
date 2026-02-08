import { ClientModel } from "../models/client.model.js";

export const ClientService = {
  createClient: (data) => {
    // Here you can add validation if needed
    return ClientModel.create({
      company_name: data.company_name,
      contact_person: data.contact_person,
      phone: data.phone,
      address: data.address
    });
  },

  getAllClients: () => {
    return ClientModel.getAll();
  },

  getClientById: (id) => {
    return ClientModel.getById(id);
  },

  updateClient: (id, data) => {
    return ClientModel.update(id, data);
  },

  archiveClient: (id) => {
    return ClientModel.archive(id);
  }
};
