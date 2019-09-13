const {
  is
} = require('bpmnlint-utils');

/**
 * A rule that checks that sequence flows after
 * an exclusive forking gateway have conditions
 * attached.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:ExclusiveGateway')) {
      return;
    }

    const outgoing = node.outgoing || [];

    outgoing.forEach((flow) => {
      const missingCondition = (
        !hasCondition(flow) &&
        !isDefaultFlow(node, flow)
      );

      if (missingCondition) {
        reporter.report(flow.id, 'Sequence flow is missing condition');
      }
    });
  }

  return {
    check
  };

};


// helpers /////////////////////////////

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}