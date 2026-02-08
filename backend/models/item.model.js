import db from "../db/database.js";

export const ItemModel = {
  create: ({ order_id, size, paper_type, color, weight, price }) => {
    const stmt = db.prepare(`
      INSERT INTO items (order_id, size, paper_type, color, weight, price)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const info = stmt.run(order_id, size, paper_type, color, weight, price);
    return info.lastInsertRowid;
  },

  getByOrderId: (order_id) => {
    return db.prepare(`SELECT * FROM items WHERE order_id = ?`).get(order_id);
  },

  update: (order_id, data) => {
    const stmt = db.prepare(`
      UPDATE items
      SET size = ?, paper_type = ?, color = ?, weight = ?, price = ?
      WHERE order_id = ?
    `);
    return stmt.run(data.size, data.paper_type, data.color, data.weight, data.price, order_id);
  }
};
