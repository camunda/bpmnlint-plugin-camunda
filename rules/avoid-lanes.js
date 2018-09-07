/**
 * Rule that reports the usage of lanes.
 */
module.exports = function(utils) {

  var is = utils.is;

  function check(node, reporter) {
    if (is(node, 'bpmn:Lane')) {
      reporter.report(node.id, 'lanes should be avoided');
    }
  }

  return {
    check: check
  };
};
