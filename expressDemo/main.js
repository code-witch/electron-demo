// imports
const { app, BrowserWindow } = require("electron");
const express = require('express');
const pug = require('pug');
const path = require('path');
// require('./editor');
const routes = require('./routes/routes');

const server = express();
server.set('view engine', 'pug');
server.set('views', __dirname + '/views');
server.use(express.static(path.join(__dirname + '/public')));

server.get('/', routes.index);






// window 
let mainWindow;

// starts the window process
const start = () => {
    mainWindow = new BrowserWindow({
        title: 'Demo',
        backgroundColor: '#222',
        
        minHeight: 900,
        // maxHeight: height,
        // height: height,
        
        minWidth: 1600,
        // maxWidth: width,
        // width: width,

        webPreferences: {
            nodeIntegration: true
        }
    });

    // mainWindow.loadFile(__dirname + "../public/index2.html");
    server.listen(3001);
    mainWindow.loadURL('http://localhost:3001/');
    // require('../editor');
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
     
}

app.on("ready", start);

app.on("window-all-closed", () => {
    app.quit();
});