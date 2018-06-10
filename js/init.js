const $ = require('jquery')
const bootstrap = require('bootstrap');
//require('bootstrap/dist/css/bootstrap.css');

const { remote } = require('electron')
var win = remote.getCurrentWindow()
$('#minimize').click(function() {
    win.minimize()
    console.log('min')
})
$('#maximize').click(function() {
    if (!win.isMaximized()) {
        win.maximize()
        console.log('max')
    }
})
$('#close').click(function() {
    win.close()
    console.log('close')
})