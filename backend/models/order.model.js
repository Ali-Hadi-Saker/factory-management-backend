import db from "../db/database.js";

export const OrderModel = {
  create: ({ client_id, status, order_date, delivery_date, quantity, total_price, payment_status, notes }) => {
    const stmt = db.prepare(`
      INSERT INTO orders (client_id, status, order_date, delivery_date, quantity, total_price, payment_status, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const info = stmt.run(client_id, status, order_date, delivery_date, quantity, total_price, payment_status, notes);
    return info.lastInsertRowid;
  },

  getAll: () => {
    return db.prepare(`SELECT * FROM orders WHERE is_archived = 0`).all();
  },

  getById: (id) => {
    return db.prepare(`SELECT * FROM orders WHERE id = ?`).get(id);
  },

  update: (id, data) => {
    const stmt = db.prepare(`
      UPDATE orders
      SET status = ?, order_date = ?, delivery_date = ?, quantity = ?, total_price = ?, payment_status = ?, notes = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);
    return stmt.run(data.status, data.order_date, data.delivery_date, data.quantity, data.total_price, data.payment_status, data.notes, id);
  },

  archive: (id) => {
    const stmt = db.prepare(`UPDATE orders SET is_archived = 1 WHERE id = ?`);
    return stmt.run(id);
  }
};
