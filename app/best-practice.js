
const { app, BrowserWindow } = require('electron')
const path = require('path');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.resolve(__dirname, './preload.js'),
      }
  })

  let url = 'file://' + path.resolve(__dirname + '/../best-practice-client/build/index.html')
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:3000/'
  }
  mainWindow.loadURL(url);
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

// api's
const renderer = require('./renderer');
const { LinterState } = require('./core/linter/LinterState');

renderer.on('save-sheme-state', (options) => {
  LinterState.setStates(options)
});

renderer.on('test:sync', (done) => {
    done(null, "HERE WE GOOOOOO");
});