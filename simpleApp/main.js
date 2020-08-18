// imports
const { app, BrowserWindow } = require("electron");
// my constants
const width = 1600;
const height = 900;

// window 
let mainWindow;

// starts the window process
const start = () => {
    mainWindow = new BrowserWindow({
        title: 'Playground',
        backgroundColor: '#222',
        minHeight: height,
        maxHeight: height,
        height: height,
        
        minWidth: width,
        maxWidth: width,
        width: width,

        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(__dirname + "/public/index.html");

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
     
}

app.on("ready", start);

app.on("window-all-closed", () => {
    app.quit();
});
