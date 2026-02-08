import db from "../db/database.js";

export const ClientModel = {
  create: ({ company_name, contact_person, phone, address }) => {
    const stmt = db.prepare(`
      INSERT INTO clients (company_name, contact_person, phone, address)
      VALUES (?, ?, ?, ?)
    `);
    const info = stmt.run(company_name, contact_person, phone, address);
    return info.lastInsertRowid;
  },

  getAll: () => {
    return db.prepare(`SELECT * FROM clients WHERE is_archived = 0`).all();
  },

  getById: (id) => {
    return db.prepare(`SELECT * FROM clients WHERE id = ?`).get(id);
  },

  update: (id, data) => {
    const stmt = db.prepare(`
      UPDATE clients
      SET company_name = ?, contact_person = ?, phone = ?, address = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);
    return stmt.run(data.company_name, data.contact_person, data.phone, data.address, id);
  },

  archive: (id) => {
    const stmt = db.prepare(`UPDATE clients SET is_archived = 1 WHERE id = ?`);
    return stmt.run(id);
  }
};
