import ContextRegistrator from "../../core/config/ContextRegistrator";

/**
 * A bpmn-js service that provides the actual plug-in feature.
 *
 * Checkout the bpmn-js examples to learn about its capabilities
 * and the extension points it offers:
 *
 * https://github.com/bpmn-io/bpmn-js-examples
 */

ContextRegistrator.register()

export default function ExampleBpmnJsExtension(eventBus) {

  eventBus.on('shape.added', function(context) {
    var element = context.element;
    ContextRegistrator.bpmnShapeAnalizeService.analizeElement(element);
  });

  eventBus.on('connection.added', function(context) {
    var element = context.element;
    ContextRegistrator.bpmnShapeAnalizeService.analizeElement(element);
  });
}

ExampleBpmnJsExtension.$inject = [
  'eventBus'
];