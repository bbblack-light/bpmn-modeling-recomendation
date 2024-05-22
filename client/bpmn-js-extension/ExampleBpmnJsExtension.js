import SchemeState from "../core/state/SchemeState";

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
}

//todo: check cross domain localstorage

ExampleBpmnJsExtension.$inject = [
  'eventBus'
];