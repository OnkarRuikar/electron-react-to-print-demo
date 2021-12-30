'use strict';

const { app, ipcMain, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;
let dev = false;
if (
 process.defaultApp ||
 /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
 /[\\/]electron[\\/]/.test(process.execPath)
) {
 dev = true;
}

function createWindow() {
 mainWindow = new BrowserWindow({ width: 1024, height: 768, show: false });

 // load the index.html of the app
 let indexPath;
 if (dev && process.argv.indexOf('--noDevServer') === -1) {
  indexPath = url.format({
   protocol: 'http:',
   host: 'localhost:4000',
   pathname: 'index.html',
   slashes: true,
  });
 } else {
  indexPath = url.format({
   protocol: 'file:',
   pathname: path.join(__dirname, 'dist', 'index.html'),
   slashes: true,
  });
 }
 mainWindow.loadURL(indexPath);

 mainWindow.once('ready-to-show', () => {
  mainWindow.show();
  if (dev) {
   mainWindow.webContents.openDevTools();
  }
 });

 mainWindow.on('closed', function () {
  mainWindow = null;

  // You need to close windows created for printing at some point.
  // Otherwise the app may never terminate.
  BrowserWindow.getAllWindows().forEach((win) => {
   let isPrint = win.webContents.browserWindowOptions.isPrintWindow;
   if (isPrint) win.close();
  });

  // or take the shortcut
  /*if (process.platform !== 'darwin') {
   app.quit();
  }*/
 });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
 if (process.platform !== 'darwin') {
  app.quit();
 }
});

app.on('activate', () => {
 if (mainWindow === null) {
  createWindow();
 }
});

//-------------------- print function -----------------

// List of all options at -
// https://www.electronjs.org/docs/latest/api/web-contents#contentsprintoptions-callback
const printOptions = {
 silent: false,
 printBackground: true,
 color: true,
 margin: {
  marginType: 'printableArea',
 },
 landscape: false,
 pagesPerSheet: 1,
 collate: false,
 copies: 1,
 header: 'Page header',
 footer: 'Page footer',
};

ipcMain.on('printComponent', (event, url) => {
 let win = new BrowserWindow({
  show: false,
  isPrintWindow: true /* my custom property */,
  webPreferences: {
   nodeIntegration: true,
  },
 });

 win.loadURL(url);

 win.webContents.on('did-finish-load', () => {
  win.webContents.print(printOptions, (success, failureReason) => {
   console.log('Print Initiated in Main...');
   if (!success) console.log(failureReason);
  });
 });
});
