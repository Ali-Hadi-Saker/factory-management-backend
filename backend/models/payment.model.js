import db from "../db/database.js";

export const PaymentModel = {
  create: ({ order_id, amount, payment_date, method, notes }) => {
    const stmt = db.prepare(`
      INSERT INTO payments (order_id, amount, payment_date, method, notes)
      VALUES (?, ?, ?, ?, ?)
    `);
    const info = stmt.run(order_id, amount, payment_date, method, notes);
    return info.lastInsertRowid;
  },

  getByOrderId: (order_id) => {
    return db.prepare(`SELECT * FROM payments WHERE order_id = ?`).all(order_id);
  }
};
