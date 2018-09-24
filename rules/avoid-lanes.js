const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports the usage of lanes.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'bpmn:Lane')) {
      reporter.report(node.id, 'lanes should be avoided');
    }
  }

  return {
    check: check
  };
};
