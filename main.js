// Main Electron entry: create and manage the application window
const { app, BrowserWindow } = require('electron'); // Electron app and window
const path = require('path'); // path helpers

function createWindow() {
  // Create the browser window with a preload script for secure IPC
  const win = new BrowserWindow({
    width: 800, // window width
    height: 600, // window height
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // preload script path
    }
  });

  win.loadFile('index.html'); // load the app UI
}

app.whenReady().then(createWindow); // create window when Electron is ready

// Quit the app on all windows closed (except on macOS where it's typical
// to keep the app running until the user quits explicitly)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit(); // quit for non-mac platforms
});
