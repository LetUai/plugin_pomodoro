const electron = require('electron');
const { app, BrowserWindow } = require('electron'); 

function createWindow(){

let win  = new BrowserWindow({
width: 460,
height: 600,
icon: __dirname + '/assets/CodeLab.png',
webPreferences: {
nodeIntegration: true
}
})
win.setMenu(null);
win.loadFile('./index.html'); 
//win.webContents.openDevTools()
}



app.whenReady().then(createWindow); 
