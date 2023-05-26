const {
  is
} = require('bpmnlint-utils');

const implementationAttributes = [
  'camunda:expression',
  'camunda:delegateExpression',
  'camunda:class',
  'camunda:type'
];

/**
 * Rule that reports the usage of collapsed sub-processes.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'camunda:ServiceTaskLike')) {

      const process = findNodeProcess(node);

      if (!process || !process.get('isExecutable')) {
        return;
      }

      if (
        hasConnector(node) ||
        hasAnyAttribute(node, implementationAttributes)
      ) {
        return;
      }

      if (is(node, 'bpmn:BusinessRuleTask') && hasAttribute(node, 'camunda:decisionRef')) {
        return;
      }

      reporter.report(node.id, 'Implementation is missing');
    }
  }

  return {
    check: check
  };
};

function findNodeProcess(node) {
  let parent = node.$parent;

  while (parent && !is(parent, 'bpmn:Process')) {
    parent = parent.$parent;
  }

  return parent;
}

function hasConnector(bpmnElement) {
  const extensionElements = bpmnElement.get('extensionElements');

  if (!extensionElements) {
    return false;
  }

  return extensionElements.get('values').some(function(extension) {
    return is(extension, 'camunda:Connector');
  });
}

function hasAnyAttribute(bpmnElement, attributes) {
  return attributes.some(function(attribute) {
    return hasAttribute(bpmnElement, attribute);
  });
}

function hasAttribute(bpmnElement, attribute) {
  return bpmnElement.get(attribute) !== undefined;
}
