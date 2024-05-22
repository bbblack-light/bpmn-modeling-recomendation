
const { app, BrowserWindow } = require('electron')
const path = require('path');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
        preload: path.resolve(__dirname, './preload.js'),
      }
  })

  let url = 'file://' + path.resolve(__dirname + '/../best-practice-client/build/index.html')
  // if (process.env.NODE_ENV === 'development') {
  //   url = 'http://localhost:3000/'
  // }
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
const PersonInputs = require('./domain/expert-system/PersonInputs');
const ExpertSystem = require('./core/expert-system/ExpertSystem');
const Questionaire = require('./core/questionaire/Questionare');
const LinterState = require('./core/scheme/LinterState');
const RecomendationMapper = require('./core/expert-system/RecomendationsMapper');

renderer.on('save-linter-state', (options) => {
  LinterState.setState(options)
});

renderer.on('expert-system-resolve', (options, done) => {
  let personInputs = options.map(value => new PersonInputs(value.name, value.value))
  console.log(personInputs)
  done(null, ExpertSystem.resolveWithInputs(personInputs));
});

renderer.on('questionaire-resolve', (options, done) => {
  let personInputs = options.map(value => new PersonInputs(value.name, value.value))
  console.log(personInputs)
  let esRsult = ExpertSystem.resolveWithInputs(personInputs);
  let recomendations = RecomendationMapper.mapToRecomendation(esRsult)
  console.log(recomendations)
  done(null, { 
    recomendations: recomendations,
    linterValue: LinterState.getState()
  });
});

renderer.on('get-questionaire', (done) => {
  done(null, Questionaire.getContent());
});