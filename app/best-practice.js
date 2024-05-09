
console.log("HEREEE")
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

const renderer = require('./renderer');
console.log("HEREEE", renderer)

renderer.on('test:test', () => {
    console.log("HEEERRRE WE GOOOOOO")
});

renderer.on('test:sync', (done) => {
    console.log("HEEERRRE WE GOOOOOO")
    done(null, "HERE WE GOOOOOO");
  });
  