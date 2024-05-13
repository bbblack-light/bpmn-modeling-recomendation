
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
const PersonInputs = require('./core/expert-system/PersonInputs');
const ExpertSystem = require('./core/expert-system/ExpertSystem');

renderer.on('save-sheme-state', (options) => {
  LinterState.setStates(options)
});

renderer.on('expert-system-resolve', (options, done) => {
  let personInputs = options.map(value => new PersonInputs(value.name, value.value))
  console.log(personInputs)
  done(null, ExpertSystem.resolveWithInputs(personInputs));
});