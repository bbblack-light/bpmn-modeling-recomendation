import SchemeState from "../../core/state/SchemeState";

const {
  metadata,
  flags,
  plugins: appPlugins,
  backend: appBackend
} = window.getAppPreload()

export default function ExampleBpmnJsExtension(eventBus) {
  eventBus.on('shape.added', function(context) {
    var element = context.element;
    SchemeState.addState(element);
  });

  eventBus.on('shape.removed', function(context) {
    var element = context.element;
    SchemeState.removeState(element);
  });

  eventBus.on('connection.added', function(context) {
    var element = context.element;
  });

  eventBus.on('connection.removed', function(context) {
    var element = context.element;
    SchemeState.removeState(element);
  });

  eventBus.on('elements.click', function() {
    backend.send('dialog:open-files', options);
  })
}

ExampleBpmnJsExtension.$inject = [
  'eventBus'
];