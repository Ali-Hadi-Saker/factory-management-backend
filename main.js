// Main Electron entry: create and manage the application window
import {app, BrowserWindow} from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Needed to replace __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import './backend/index.js';

function createWindow() {
  // Create the browser window with a preload script for secure IPC
  const win = new BrowserWindow({
    width: 800, // window width
    height: 600, // window height
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // preload script path
    }
  });

  win.loadURL("http://localhost:5173");// load the app UI
}

app.whenReady().then(createWindow); // create window when Electron is ready

// Quit the app on all windows closed (except on macOS where it's typical
// to keep the app running until the user quits explicitly)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit(); // quit for non-mac platforms
});

console.log("Electron main started");
