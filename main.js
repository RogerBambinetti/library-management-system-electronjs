const { app, BrowserWindow } = require('electron')

function createWindow() {

    let win = new BrowserWindow({
        backgroundColor: "#F2F2F2",
        icon: './build/icon.png',
        minWidth: 1100,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    })

    win.setMenu(null);

    win.loadFile('view/index.html');

}

app.on('ready', createWindow);