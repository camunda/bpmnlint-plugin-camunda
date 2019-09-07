const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports the usage of collapsed sub-processes.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'bpmndi:BPMNShape')) {

      const bpmnElement = node.bpmnElement;

      if (is(bpmnElement, 'bpmn:SubProcess') && !node.isExpanded) {
        reporter.report(bpmnElement.id, 'Sub-process should be expanded');
      }
    }
  }

  return {
    check: check
  };
};
