// Initialize and export a singleton better-sqlite3 Database for Electron
import Database from "better-sqlite3";
import path from "path";
import { app } from "electron";

const dbPath = path.join(app.getPath("userData"), "factory.db"); // DB file: app.getPath('userData')/factory.db
const db = new Database(dbPath); // open DB (synchronous API)
db.pragma("foreign_keys = ON"); // enable foreign key constraints

export default db; // default export for use across the app
