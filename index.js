// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const url = require('url')
let win = null

function boot() {
    console.log(process.type)
    win = new BrowserWindow({
        width: 400,
        height: 600,
        frame: false
    })
    win.loadURL(`file://${__dirname}/index.html`)
    win.webContents.openDevTools()
}
app.on('ready', boot)