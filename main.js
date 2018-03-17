var menubar = require('menubar')
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const { exec } = require('child_process');

var mb = menubar({
    index: 'file://' + __dirname + '/dist/index.html',
    width: 300,
    height: 300,
    resizable: false,
    preloadWindow: true,
    transparent: false,
    frame: false,
    show: false,
    alwaysOnTop: false,
    'auto-hide-menu-bar': true
});

mb.on('ready', function ready() {
    console.log('app is ready')
})
