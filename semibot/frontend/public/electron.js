const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  console.log('createWindow: creating BrowserWindow');
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Open DevTools to surface runtime errors in renderer
  win.webContents.openDevTools({ mode: 'right' });

  win.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    console.error('did-fail-load', errorCode, errorDescription, validatedURL);
  });

  win.on('closed', () => {
    console.log('BrowserWindow closed');
  });

  console.log('Loading URL http://localhost:3000');
  win.loadURL("http://localhost:3000"); // React dev server
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
