// 🔹 Initialize database
import "./db/init.js";

// 🔹 Register IPC handlers
import "./ipc/client.ipc.js";
import "./ipc/order.ipc.js";
import "./ipc/payment.ipc.js";

console.log("Backend initialized: DB ready and IPC handlers loaded");
