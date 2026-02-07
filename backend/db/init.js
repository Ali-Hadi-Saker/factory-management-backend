import db from "./database.js";

db.exec(`
CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  company_name TEXT NOT NULL,
  contact_person TEXT,
  phone TEXT,
  address TEXT,
  is_archived INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  status TEXT NOT NULL,
  order_date TEXT,
  delivery_date TEXT,
  quantity INTEGER NOT NULL,
  total_price REAL NOT NULL,
  payment_status TEXT NOT NULL,
  notes TEXT,
  is_archived INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL UNIQUE,
  size TEXT,
  paper_type TEXT,
  color TEXT,
  weight REAL,
  price REAL NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL,
  amount REAL NOT NULL,
  payment_date TEXT DEFAULT CURRENT_TIMESTAMP,
  method TEXT,
  notes TEXT,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);
`);
