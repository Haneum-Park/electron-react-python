// const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const Store = require('electron-store');
const initStore = new Store();

ipcMain.on('request_main_store_main_data', (event, data) => {
  console.log('=== Request request_main_store_main_data ===')
  const { spawn } = require('child_process');
  const pyShell = spawn('./public/assets/.venv/bin/python', ['./public/python/main.py', data]);

  pyShell.stdout.on('data', (data) => {
    console.log(`stdout : ${data}`);
  });
  pyShell.stderr.on('data', (data) => {
    console.log(`stderr : ${data}`);
  });
  pyShell.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});