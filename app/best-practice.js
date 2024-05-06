
const { app, BrowserWindow } = require('electron')
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.resolve(__dirname, './preload.js'),
      }
  })

  win.loadFile(path.resolve(__dirname + '/../best-practice-client/index.html'))
}

module.exports = function () {
  return [
    {
      label: 'Start best practice test',
      action: function () {
        createWindow()
      }
    }
  ]
}