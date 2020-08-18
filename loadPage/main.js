const {app, BrowserWindow} = require('electron');

let mainWindow;

// Wait until the app is ready
const start = () => {
    // Create a new window
    mainWindow = new BrowserWindow({
        // Don't show the window until it ready, this prevents any white flickering
        show: false,
        webPreferences: {
        // Disable node integration in remote page
        nodeIntegration: false
        }
  });
    // URL is argument to npm start
    const url = process.argv[2] || "https://www.youtube.com/watch?v=fC7oUOUEEi4";
    mainWindow.loadURL(url);
    
    // Show window when page is ready
    mainWindow.once('ready-to-show', () => {
        mainWindow.maximize();
        mainWindow.show();
    });
};

app.once('ready', start);